-- =====================================================
-- ROTALY - Otel Rezervasyon Platformu
-- Supabase Veritabanı Şeması
-- =====================================================

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- =====================================================
-- ENUM TYPES
-- =====================================================

-- User roles
CREATE TYPE user_role AS ENUM ('customer', 'hotel_owner', 'admin', 'support');

-- Property/Accommodation types
CREATE TYPE property_type AS ENUM ('hotel', 'villa', 'apartment', 'bungalow', 'hostel', 'camp');

-- Room types
CREATE TYPE room_type AS ENUM ('single', 'double', 'triple', 'suite', 'family', 'deluxe', 'penthouse', 'studio');

-- Booking status
CREATE TYPE booking_status AS ENUM ('pending', 'confirmed', 'cancelled', 'completed', 'refunded');

-- Payment status
CREATE TYPE payment_status AS ENUM ('pending', 'paid', 'failed', 'refunded', 'partially_refunded');

-- Payment method
CREATE TYPE payment_method AS ENUM ('credit_card', 'bank_transfer', 'pay_at_property');

-- Support ticket status
CREATE TYPE ticket_status AS ENUM ('open', 'in_progress', 'resolved', 'closed');

-- Support ticket priority
CREATE TYPE ticket_priority AS ENUM ('low', 'medium', 'high', 'urgent');

-- Supported languages
CREATE TYPE supported_language AS ENUM ('tr', 'en');

-- Hotel application status
CREATE TYPE application_status AS ENUM ('pending', 'approved', 'rejected');

-- =====================================================
-- CORE TABLES
-- =====================================================

-- Users table (extends Supabase auth.users)
CREATE TABLE public.users (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT UNIQUE NOT NULL,
    full_name TEXT,
    phone TEXT,
    avatar_url TEXT,
    role user_role DEFAULT 'customer' NOT NULL,
    preferred_language supported_language DEFAULT 'tr',
    email_verified BOOLEAN DEFAULT FALSE,
    phone_verified BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    must_change_password BOOLEAN DEFAULT FALSE,
    last_login_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- User addresses
CREATE TABLE public.user_addresses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
    address_line1 TEXT NOT NULL,
    address_line2 TEXT,
    city TEXT NOT NULL,
    state TEXT,
    postal_code TEXT,
    country TEXT NOT NULL DEFAULT 'TR',
    is_default BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =====================================================
-- PROPERTY/ACCOMMODATION TABLES
-- =====================================================

-- Properties (Hotels, Villas, Apartments, etc.)
CREATE TABLE public.properties (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    owner_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
    property_type property_type NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    star_rating INTEGER CHECK (star_rating >= 1 AND star_rating <= 5),
    
    -- Location
    address TEXT NOT NULL,
    city TEXT NOT NULL,
    state TEXT,
    postal_code TEXT,
    country TEXT NOT NULL DEFAULT 'TR',
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    
    -- Contact
    phone TEXT,
    email TEXT,
    website TEXT,
    
    -- Policies
    check_in_time TIME DEFAULT '14:00',
    check_out_time TIME DEFAULT '12:00',
    min_stay_nights INTEGER DEFAULT 1,
    max_stay_nights INTEGER DEFAULT 30,
    cancellation_days INTEGER DEFAULT 1, -- Free cancellation days before check-in
    
    -- Status
    is_active BOOLEAN DEFAULT FALSE,
    is_verified BOOLEAN DEFAULT FALSE,
    is_featured BOOLEAN DEFAULT FALSE,
    
    -- Stats (denormalized for performance)
    total_rooms INTEGER DEFAULT 0,
    avg_rating DECIMAL(2, 1) DEFAULT 0,
    review_count INTEGER DEFAULT 0,
    
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Property translations (multi-language support)
CREATE TABLE public.property_translations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    property_id UUID NOT NULL REFERENCES public.properties(id) ON DELETE CASCADE,
    language supported_language NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    short_description TEXT,
    policies TEXT,
    UNIQUE(property_id, language)
);

-- Property images
CREATE TABLE public.property_images (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    property_id UUID NOT NULL REFERENCES public.properties(id) ON DELETE CASCADE,
    url TEXT NOT NULL,
    alt_text TEXT,
    is_primary BOOLEAN DEFAULT FALSE,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Property amenities/features
CREATE TABLE public.amenities (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT UNIQUE NOT NULL,
    icon TEXT,
    category TEXT, -- 'general', 'room', 'bathroom', 'kitchen', 'outdoor', 'safety'
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Amenity translations
CREATE TABLE public.amenity_translations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    amenity_id UUID NOT NULL REFERENCES public.amenities(id) ON DELETE CASCADE,
    language supported_language NOT NULL,
    name TEXT NOT NULL,
    UNIQUE(amenity_id, language)
);

-- Property amenities junction
CREATE TABLE public.property_amenities (
    property_id UUID NOT NULL REFERENCES public.properties(id) ON DELETE CASCADE,
    amenity_id UUID NOT NULL REFERENCES public.amenities(id) ON DELETE CASCADE,
    PRIMARY KEY (property_id, amenity_id)
);

-- =====================================================
-- ROOM TABLES
-- =====================================================

-- Rooms
CREATE TABLE public.rooms (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    property_id UUID NOT NULL REFERENCES public.properties(id) ON DELETE CASCADE,
    room_type room_type NOT NULL,
    slug TEXT NOT NULL,
    
    -- Capacity
    max_adults INTEGER NOT NULL DEFAULT 2,
    max_children INTEGER DEFAULT 0,
    max_occupancy INTEGER NOT NULL DEFAULT 2,
    bed_count INTEGER DEFAULT 1,
    
    -- Pricing
    base_price DECIMAL(10, 2) NOT NULL,
    currency TEXT DEFAULT 'TRY',
    
    -- Details
    size_sqm DECIMAL(6, 2),
    floor_number INTEGER,
    room_number TEXT,
    
    -- Availability
    total_units INTEGER DEFAULT 1, -- How many of this room type exist
    is_active BOOLEAN DEFAULT TRUE,
    
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(property_id, slug)
);

-- Room translations
CREATE TABLE public.room_translations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    room_id UUID NOT NULL REFERENCES public.rooms(id) ON DELETE CASCADE,
    language supported_language NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    UNIQUE(room_id, language)
);

-- Room images
CREATE TABLE public.room_images (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    room_id UUID NOT NULL REFERENCES public.rooms(id) ON DELETE CASCADE,
    url TEXT NOT NULL,
    alt_text TEXT,
    is_primary BOOLEAN DEFAULT FALSE,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Room amenities junction
CREATE TABLE public.room_amenities (
    room_id UUID NOT NULL REFERENCES public.rooms(id) ON DELETE CASCADE,
    amenity_id UUID NOT NULL REFERENCES public.amenities(id) ON DELETE CASCADE,
    PRIMARY KEY (room_id, amenity_id)
);

-- Room pricing (seasonal/special pricing)
CREATE TABLE public.room_pricing (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    room_id UUID NOT NULL REFERENCES public.rooms(id) ON DELETE CASCADE,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    min_stay_nights INTEGER DEFAULT 1,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    CONSTRAINT valid_date_range CHECK (end_date >= start_date)
);

-- Room availability (blocked dates, special availability)
CREATE TABLE public.room_availability (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    room_id UUID NOT NULL REFERENCES public.rooms(id) ON DELETE CASCADE,
    date DATE NOT NULL,
    available_units INTEGER NOT NULL DEFAULT 0,
    is_blocked BOOLEAN DEFAULT FALSE,
    block_reason TEXT,
    UNIQUE(room_id, date)
);

-- =====================================================
-- BOOKING/RESERVATION TABLES
-- =====================================================

-- Bookings
CREATE TABLE public.bookings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    booking_number TEXT UNIQUE NOT NULL, -- Human readable booking number
    user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE RESTRICT,
    property_id UUID NOT NULL REFERENCES public.properties(id) ON DELETE RESTRICT,
    room_id UUID NOT NULL REFERENCES public.rooms(id) ON DELETE RESTRICT,
    
    -- Dates
    check_in_date DATE NOT NULL,
    check_out_date DATE NOT NULL,
    nights INTEGER NOT NULL,
    
    -- Guests
    adults INTEGER NOT NULL DEFAULT 1,
    children INTEGER DEFAULT 0,
    
    -- Pricing
    room_price DECIMAL(10, 2) NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    currency TEXT DEFAULT 'TRY',
    
    -- Status
    status booking_status DEFAULT 'pending',
    payment_status payment_status DEFAULT 'pending',
    payment_method payment_method,
    
    -- Guest info (in case different from user)
    guest_name TEXT NOT NULL,
    guest_email TEXT NOT NULL,
    guest_phone TEXT,
    special_requests TEXT,
    
    -- Cancellation
    cancelled_at TIMESTAMPTZ,
    cancellation_reason TEXT,
    refund_amount DECIMAL(10, 2),
    
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    CONSTRAINT valid_booking_dates CHECK (check_out_date > check_in_date)
);

-- Booking payments
CREATE TABLE public.booking_payments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    booking_id UUID NOT NULL REFERENCES public.bookings(id) ON DELETE CASCADE,
    amount DECIMAL(10, 2) NOT NULL,
    currency TEXT DEFAULT 'TRY',
    payment_method payment_method NOT NULL,
    status payment_status DEFAULT 'pending',
    transaction_id TEXT,
    payment_provider TEXT, -- 'stripe', 'iyzico', etc.
    paid_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =====================================================
-- REVIEWS & RATINGS
-- =====================================================

-- Reviews
CREATE TABLE public.reviews (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    booking_id UUID UNIQUE NOT NULL REFERENCES public.bookings(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
    property_id UUID NOT NULL REFERENCES public.properties(id) ON DELETE CASCADE,
    
    -- Ratings (1-5)
    overall_rating INTEGER NOT NULL CHECK (overall_rating >= 1 AND overall_rating <= 5),
    cleanliness_rating INTEGER CHECK (cleanliness_rating >= 1 AND cleanliness_rating <= 5),
    location_rating INTEGER CHECK (location_rating >= 1 AND location_rating <= 5),
    service_rating INTEGER CHECK (service_rating >= 1 AND service_rating <= 5),
    value_rating INTEGER CHECK (value_rating >= 1 AND value_rating <= 5),
    
    -- Content
    title TEXT,
    comment TEXT,
    
    -- Status
    is_approved BOOLEAN DEFAULT FALSE,
    is_featured BOOLEAN DEFAULT FALSE,
    
    -- Owner response
    owner_response TEXT,
    owner_response_at TIMESTAMPTZ,
    
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =====================================================
-- FAVORITES/WISHLIST
-- =====================================================

CREATE TABLE public.favorites (
    user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
    property_id UUID NOT NULL REFERENCES public.properties(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    PRIMARY KEY (user_id, property_id)
);

-- =====================================================
-- HOTEL APPLICATIONS (Otel Başvuruları)
-- =====================================================

CREATE TABLE public.hotel_applications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    application_number TEXT UNIQUE NOT NULL,
    business_name TEXT NOT NULL,
    contact_name TEXT NOT NULL,
    contact_email TEXT NOT NULL,
    contact_phone TEXT,
    property_type property_type NOT NULL,
    address TEXT NOT NULL,
    city TEXT NOT NULL,
    state TEXT,
    postal_code TEXT,
    country TEXT NOT NULL DEFAULT 'TR',
    description TEXT,
    status application_status DEFAULT 'pending' NOT NULL,
    reviewed_by UUID REFERENCES public.users(id) ON DELETE SET NULL,
    reviewed_at TIMESTAMPTZ,
    rejection_reason TEXT,
    created_user_id UUID REFERENCES public.users(id) ON DELETE SET NULL,
    created_property_id UUID REFERENCES public.properties(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =====================================================
-- SUPPORT SYSTEM
-- =====================================================

-- Support ticket categories
CREATE TABLE public.ticket_categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT UNIQUE NOT NULL,
    sort_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Ticket category translations
CREATE TABLE public.ticket_category_translations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    category_id UUID NOT NULL REFERENCES public.ticket_categories(id) ON DELETE CASCADE,
    language supported_language NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    UNIQUE(category_id, language)
);

-- Support tickets
CREATE TABLE public.support_tickets (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    ticket_number TEXT UNIQUE NOT NULL,
    user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
    category_id UUID REFERENCES public.ticket_categories(id) ON DELETE SET NULL,
    booking_id UUID REFERENCES public.bookings(id) ON DELETE SET NULL,
    
    subject TEXT NOT NULL,
    status ticket_status DEFAULT 'open',
    priority ticket_priority DEFAULT 'medium',
    
    assigned_to UUID REFERENCES public.users(id) ON DELETE SET NULL,
    
    resolved_at TIMESTAMPTZ,
    closed_at TIMESTAMPTZ,
    
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Support ticket messages
CREATE TABLE public.ticket_messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    ticket_id UUID NOT NULL REFERENCES public.support_tickets(id) ON DELETE CASCADE,
    sender_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
    message TEXT NOT NULL,
    is_internal BOOLEAN DEFAULT FALSE, -- Internal notes for support team
    attachments JSONB DEFAULT '[]',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =====================================================
-- FAQ SYSTEM
-- =====================================================

-- FAQ categories
CREATE TABLE public.faq_categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT UNIQUE NOT NULL,
    sort_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- FAQ category translations
CREATE TABLE public.faq_category_translations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    category_id UUID NOT NULL REFERENCES public.faq_categories(id) ON DELETE CASCADE,
    language supported_language NOT NULL,
    name TEXT NOT NULL,
    UNIQUE(category_id, language)
);

-- FAQ items
CREATE TABLE public.faqs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    category_id UUID REFERENCES public.faq_categories(id) ON DELETE SET NULL,
    slug TEXT UNIQUE NOT NULL,
    sort_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    view_count INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- FAQ translations
CREATE TABLE public.faq_translations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    faq_id UUID NOT NULL REFERENCES public.faqs(id) ON DELETE CASCADE,
    language supported_language NOT NULL,
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    UNIQUE(faq_id, language)
);

-- =====================================================
-- STATIC PAGES (About, Privacy, Terms, etc.)
-- =====================================================

CREATE TABLE public.pages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT UNIQUE NOT NULL, -- 'about', 'privacy', 'terms', 'cancellation-policy'
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Page translations
CREATE TABLE public.page_translations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    page_id UUID NOT NULL REFERENCES public.pages(id) ON DELETE CASCADE,
    language supported_language NOT NULL,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    meta_title TEXT,
    meta_description TEXT,
    UNIQUE(page_id, language)
);

-- =====================================================
-- LOCATIONS (Cities, Popular Destinations)
-- =====================================================

CREATE TABLE public.locations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT UNIQUE NOT NULL,
    country_code TEXT NOT NULL DEFAULT 'TR',
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    image_url TEXT,
    is_featured BOOLEAN DEFAULT FALSE,
    sort_order INTEGER DEFAULT 0,
    property_count INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Location translations
CREATE TABLE public.location_translations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    location_id UUID NOT NULL REFERENCES public.locations(id) ON DELETE CASCADE,
    language supported_language NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    UNIQUE(location_id, language)
);

-- =====================================================
-- INDEXES FOR PERFORMANCE
-- =====================================================

-- Users
CREATE INDEX idx_users_role ON public.users(role);
CREATE INDEX idx_users_email ON public.users(email);

-- Properties
CREATE INDEX idx_properties_owner ON public.properties(owner_id);
CREATE INDEX idx_properties_type ON public.properties(property_type);
CREATE INDEX idx_properties_city ON public.properties(city);
CREATE INDEX idx_properties_active ON public.properties(is_active);
CREATE INDEX idx_properties_featured ON public.properties(is_featured);
CREATE INDEX idx_properties_location ON public.properties(latitude, longitude);

-- Rooms
CREATE INDEX idx_rooms_property ON public.rooms(property_id);
CREATE INDEX idx_rooms_active ON public.rooms(is_active);
CREATE INDEX idx_rooms_price ON public.rooms(base_price);

-- Bookings
CREATE INDEX idx_bookings_user ON public.bookings(user_id);
CREATE INDEX idx_bookings_property ON public.bookings(property_id);
CREATE INDEX idx_bookings_dates ON public.bookings(check_in_date, check_out_date);
CREATE INDEX idx_bookings_status ON public.bookings(status);

-- Reviews
CREATE INDEX idx_reviews_property ON public.reviews(property_id);
CREATE INDEX idx_reviews_approved ON public.reviews(is_approved);

-- Support tickets
CREATE INDEX idx_tickets_user ON public.support_tickets(user_id);
CREATE INDEX idx_tickets_status ON public.support_tickets(status);
CREATE INDEX idx_tickets_assigned ON public.support_tickets(assigned_to);

-- Hotel applications
CREATE INDEX idx_hotel_applications_status ON public.hotel_applications(status);
CREATE INDEX idx_hotel_applications_created_at ON public.hotel_applications(created_at);

-- FAQs
CREATE INDEX idx_faqs_category ON public.faqs(category_id);
CREATE INDEX idx_faqs_active ON public.faqs(is_active);

-- =====================================================
-- FUNCTIONS
-- =====================================================

-- Function to generate booking number
CREATE OR REPLACE FUNCTION generate_booking_number()
RETURNS TEXT AS $$
DECLARE
    new_number TEXT;
BEGIN
    new_number := 'ROT' || TO_CHAR(NOW(), 'YYYYMMDD') || '-' || UPPER(SUBSTRING(MD5(RANDOM()::TEXT) FROM 1 FOR 6));
    RETURN new_number;
END;
$$ LANGUAGE plpgsql;

-- Function to generate ticket number
CREATE OR REPLACE FUNCTION generate_ticket_number()
RETURNS TEXT AS $$
DECLARE
    new_number TEXT;
BEGIN
    new_number := 'TKT' || TO_CHAR(NOW(), 'YYYYMMDD') || '-' || UPPER(SUBSTRING(MD5(RANDOM()::TEXT) FROM 1 FOR 6));
    RETURN new_number;
END;
$$ LANGUAGE plpgsql;

-- Function to generate hotel application number
CREATE OR REPLACE FUNCTION generate_application_number()
RETURNS TEXT AS $$
DECLARE
    new_number TEXT;
BEGIN
    new_number := 'OTB' || TO_CHAR(NOW(), 'YYYYMMDD') || '-' || UPPER(SUBSTRING(MD5(RANDOM()::TEXT) FROM 1 FOR 6));
    RETURN new_number;
END;
$$ LANGUAGE plpgsql;

-- Function to update property stats
CREATE OR REPLACE FUNCTION update_property_stats(p_property_id UUID)
RETURNS VOID AS $$
BEGIN
    UPDATE public.properties
    SET 
        total_rooms = (SELECT COUNT(*) FROM public.rooms WHERE property_id = p_property_id AND is_active = TRUE),
        avg_rating = (SELECT COALESCE(AVG(overall_rating), 0) FROM public.reviews WHERE property_id = p_property_id AND is_approved = TRUE),
        review_count = (SELECT COUNT(*) FROM public.reviews WHERE property_id = p_property_id AND is_approved = TRUE),
        updated_at = NOW()
    WHERE id = p_property_id;
END;
$$ LANGUAGE plpgsql;

-- Function to update location property count
CREATE OR REPLACE FUNCTION update_location_property_count()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE public.locations
    SET property_count = (
        SELECT COUNT(*) 
        FROM public.properties 
        WHERE city = locations.slug AND is_active = TRUE
    );
    RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- =====================================================
-- TRIGGERS
-- =====================================================

-- Auto-generate booking number
CREATE OR REPLACE FUNCTION set_booking_number()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.booking_number IS NULL THEN
        NEW.booking_number := generate_booking_number();
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_set_booking_number
    BEFORE INSERT ON public.bookings
    FOR EACH ROW EXECUTE FUNCTION set_booking_number();

-- Auto-generate ticket number
CREATE OR REPLACE FUNCTION set_ticket_number()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.ticket_number IS NULL THEN
        NEW.ticket_number := generate_ticket_number();
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_set_ticket_number
    BEFORE INSERT ON public.support_tickets
    FOR EACH ROW EXECUTE FUNCTION set_ticket_number();

-- Auto-generate application number
CREATE OR REPLACE FUNCTION set_application_number()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.application_number IS NULL OR NEW.application_number = '' THEN
        NEW.application_number := generate_application_number();
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_set_application_number
    BEFORE INSERT ON public.hotel_applications
    FOR EACH ROW EXECUTE FUNCTION set_application_number();

-- Auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_users_updated_at BEFORE UPDATE ON public.users FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER trigger_properties_updated_at BEFORE UPDATE ON public.properties FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER trigger_rooms_updated_at BEFORE UPDATE ON public.rooms FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER trigger_bookings_updated_at BEFORE UPDATE ON public.bookings FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER trigger_reviews_updated_at BEFORE UPDATE ON public.reviews FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER trigger_tickets_updated_at BEFORE UPDATE ON public.support_tickets FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER trigger_pages_updated_at BEFORE UPDATE ON public.pages FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER trigger_faqs_updated_at BEFORE UPDATE ON public.faqs FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER trigger_hotel_applications_updated_at BEFORE UPDATE ON public.hotel_applications FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- =====================================================
-- INITIAL SEED DATA
-- =====================================================

-- Insert default amenities
INSERT INTO public.amenities (slug, icon, category) VALUES
-- General
('wifi', 'wifi', 'general'),
('parking', 'car', 'general'),
('pool', 'waves', 'general'),
('spa', 'sparkles', 'general'),
('gym', 'dumbbell', 'general'),
('restaurant', 'utensils', 'general'),
('bar', 'wine', 'general'),
('room-service', 'bell', 'general'),
('concierge', 'user', 'general'),
('laundry', 'shirt', 'general'),
('pet-friendly', 'paw-print', 'general'),
('breakfast-included', 'coffee', 'general'),
('free-cancellation', 'x-circle', 'general'),
-- Room
('air-conditioning', 'thermometer', 'room'),
('heating', 'flame', 'room'),
('tv', 'tv', 'room'),
('safe', 'lock', 'room'),
('minibar', 'beer', 'room'),
('balcony', 'door-open', 'room'),
('sea-view', 'sunset', 'room'),
('mountain-view', 'mountain', 'room'),
-- Bathroom
('bathtub', 'bath', 'bathroom'),
('shower', 'droplets', 'bathroom'),
('hairdryer', 'wind', 'bathroom'),
-- Kitchen
('kitchen', 'utensils-crossed', 'kitchen'),
('refrigerator', 'refrigerator', 'kitchen'),
('microwave', 'microwave', 'kitchen'),
('coffee-maker', 'coffee', 'kitchen');

-- Insert amenity translations (Turkish)
INSERT INTO public.amenity_translations (amenity_id, language, name)
SELECT id, 'tr', 
    CASE slug
        WHEN 'wifi' THEN 'Wi-Fi'
        WHEN 'parking' THEN 'Otopark'
        WHEN 'pool' THEN 'Havuz'
        WHEN 'spa' THEN 'Spa'
        WHEN 'gym' THEN 'Spor Salonu'
        WHEN 'restaurant' THEN 'Restoran'
        WHEN 'bar' THEN 'Bar'
        WHEN 'room-service' THEN 'Oda Servisi'
        WHEN 'concierge' THEN 'Resepsiyon'
        WHEN 'laundry' THEN 'Çamaşırhane'
        WHEN 'pet-friendly' THEN 'Evcil Hayvan Dostu'
        WHEN 'breakfast-included' THEN 'Kahvaltı Dahil'
        WHEN 'free-cancellation' THEN 'Ücretsiz İptal'
        WHEN 'air-conditioning' THEN 'Klima'
        WHEN 'heating' THEN 'Isıtma'
        WHEN 'tv' THEN 'TV'
        WHEN 'safe' THEN 'Kasa'
        WHEN 'minibar' THEN 'Minibar'
        WHEN 'balcony' THEN 'Balkon'
        WHEN 'sea-view' THEN 'Deniz Manzarası'
        WHEN 'mountain-view' THEN 'Dağ Manzarası'
        WHEN 'bathtub' THEN 'Küvet'
        WHEN 'shower' THEN 'Duş'
        WHEN 'hairdryer' THEN 'Saç Kurutma Makinesi'
        WHEN 'kitchen' THEN 'Mutfak'
        WHEN 'refrigerator' THEN 'Buzdolabı'
        WHEN 'microwave' THEN 'Mikrodalga'
        WHEN 'coffee-maker' THEN 'Kahve Makinesi'
    END
FROM public.amenities;

-- Insert amenity translations (English)
INSERT INTO public.amenity_translations (amenity_id, language, name)
SELECT id, 'en', 
    CASE slug
        WHEN 'wifi' THEN 'Wi-Fi'
        WHEN 'parking' THEN 'Parking'
        WHEN 'pool' THEN 'Pool'
        WHEN 'spa' THEN 'Spa'
        WHEN 'gym' THEN 'Gym'
        WHEN 'restaurant' THEN 'Restaurant'
        WHEN 'bar' THEN 'Bar'
        WHEN 'room-service' THEN 'Room Service'
        WHEN 'concierge' THEN 'Concierge'
        WHEN 'laundry' THEN 'Laundry'
        WHEN 'pet-friendly' THEN 'Pet Friendly'
        WHEN 'breakfast-included' THEN 'Breakfast Included'
        WHEN 'free-cancellation' THEN 'Free Cancellation'
        WHEN 'air-conditioning' THEN 'Air Conditioning'
        WHEN 'heating' THEN 'Heating'
        WHEN 'tv' THEN 'TV'
        WHEN 'safe' THEN 'Safe'
        WHEN 'minibar' THEN 'Minibar'
        WHEN 'balcony' THEN 'Balcony'
        WHEN 'sea-view' THEN 'Sea View'
        WHEN 'mountain-view' THEN 'Mountain View'
        WHEN 'bathtub' THEN 'Bathtub'
        WHEN 'shower' THEN 'Shower'
        WHEN 'hairdryer' THEN 'Hair Dryer'
        WHEN 'kitchen' THEN 'Kitchen'
        WHEN 'refrigerator' THEN 'Refrigerator'
        WHEN 'microwave' THEN 'Microwave'
        WHEN 'coffee-maker' THEN 'Coffee Maker'
    END
FROM public.amenities;

-- Insert default pages
INSERT INTO public.pages (slug) VALUES
('about'),
('privacy'),
('terms'),
('cancellation-policy');

-- Insert page translations (Turkish)
INSERT INTO public.page_translations (page_id, language, title, content, meta_title, meta_description)
SELECT id, 'tr',
    CASE slug
        WHEN 'about' THEN 'Hakkımızda'
        WHEN 'privacy' THEN 'Gizlilik Politikası'
        WHEN 'terms' THEN 'Şartlar ve Koşullar'
        WHEN 'cancellation-policy' THEN 'İptal ve Değişiklik Politikası'
    END,
    CASE slug
        WHEN 'about' THEN '<p>Rotaly, hayalinizdeki konaklamayı bulmanızı sağlayan modern bir rezervasyon platformudur.</p>'
        WHEN 'privacy' THEN '<p>Gizlilik politikamız hakkında bilgi...</p>'
        WHEN 'terms' THEN '<p>Kullanım şartları ve koşullar...</p>'
        WHEN 'cancellation-policy' THEN '<p>İptal ve değişiklik politikamız hakkında bilgi...</p>'
    END,
    CASE slug
        WHEN 'about' THEN 'Hakkımızda | Rotaly'
        WHEN 'privacy' THEN 'Gizlilik Politikası | Rotaly'
        WHEN 'terms' THEN 'Şartlar ve Koşullar | Rotaly'
        WHEN 'cancellation-policy' THEN 'İptal ve Değişiklik | Rotaly'
    END,
    CASE slug
        WHEN 'about' THEN 'Rotaly hakkında bilgi edinin'
        WHEN 'privacy' THEN 'Rotaly gizlilik politikası'
        WHEN 'terms' THEN 'Rotaly kullanım şartları'
        WHEN 'cancellation-policy' THEN 'Rotaly iptal ve değişiklik politikası'
    END
FROM public.pages;

-- Insert page translations (English)
INSERT INTO public.page_translations (page_id, language, title, content, meta_title, meta_description)
SELECT id, 'en',
    CASE slug
        WHEN 'about' THEN 'About Us'
        WHEN 'privacy' THEN 'Privacy Policy'
        WHEN 'terms' THEN 'Terms and Conditions'
        WHEN 'cancellation-policy' THEN 'Cancellation and Change Policy'
    END,
    CASE slug
        WHEN 'about' THEN '<p>Rotaly is a modern booking platform that helps you find your dream accommodation.</p>'
        WHEN 'privacy' THEN '<p>Information about our privacy policy...</p>'
        WHEN 'terms' THEN '<p>Terms and conditions of use...</p>'
        WHEN 'cancellation-policy' THEN '<p>Information about our cancellation and change policy...</p>'
    END,
    CASE slug
        WHEN 'about' THEN 'About Us | Rotaly'
        WHEN 'privacy' THEN 'Privacy Policy | Rotaly'
        WHEN 'terms' THEN 'Terms and Conditions | Rotaly'
        WHEN 'cancellation-policy' THEN 'Cancellation and Change | Rotaly'
    END,
    CASE slug
        WHEN 'about' THEN 'Learn about Rotaly'
        WHEN 'privacy' THEN 'Rotaly privacy policy'
        WHEN 'terms' THEN 'Rotaly terms of use'
        WHEN 'cancellation-policy' THEN 'Rotaly cancellation and change policy'
    END
FROM public.pages;

-- Insert default ticket categories
INSERT INTO public.ticket_categories (slug, sort_order) VALUES
('booking-issue', 1),
('payment-issue', 2),
('cancellation-request', 3),
('complaint', 4),
('general-inquiry', 5),
('technical-issue', 6);

-- Insert ticket category translations (Turkish)
INSERT INTO public.ticket_category_translations (category_id, language, name, description)
SELECT id, 'tr',
    CASE slug
        WHEN 'booking-issue' THEN 'Rezervasyon Sorunu'
        WHEN 'payment-issue' THEN 'Ödeme Sorunu'
        WHEN 'cancellation-request' THEN 'İptal Talebi'
        WHEN 'complaint' THEN 'Şikayet'
        WHEN 'general-inquiry' THEN 'Genel Soru'
        WHEN 'technical-issue' THEN 'Teknik Sorun'
    END,
    CASE slug
        WHEN 'booking-issue' THEN 'Rezervasyonunuzla ilgili sorunlar'
        WHEN 'payment-issue' THEN 'Ödeme ile ilgili sorunlar'
        WHEN 'cancellation-request' THEN 'Rezervasyon iptal talepleri'
        WHEN 'complaint' THEN 'Şikayet ve geri bildirimler'
        WHEN 'general-inquiry' THEN 'Genel sorular ve bilgi talepleri'
        WHEN 'technical-issue' THEN 'Web sitesi ve uygulama sorunları'
    END
FROM public.ticket_categories;

-- Insert ticket category translations (English)
INSERT INTO public.ticket_category_translations (category_id, language, name, description)
SELECT id, 'en',
    CASE slug
        WHEN 'booking-issue' THEN 'Booking Issue'
        WHEN 'payment-issue' THEN 'Payment Issue'
        WHEN 'cancellation-request' THEN 'Cancellation Request'
        WHEN 'complaint' THEN 'Complaint'
        WHEN 'general-inquiry' THEN 'General Inquiry'
        WHEN 'technical-issue' THEN 'Technical Issue'
    END,
    CASE slug
        WHEN 'booking-issue' THEN 'Issues related to your booking'
        WHEN 'payment-issue' THEN 'Payment related issues'
        WHEN 'cancellation-request' THEN 'Booking cancellation requests'
        WHEN 'complaint' THEN 'Complaints and feedback'
        WHEN 'general-inquiry' THEN 'General questions and information requests'
        WHEN 'technical-issue' THEN 'Website and application issues'
    END
FROM public.ticket_categories;

-- Insert default FAQ categories
INSERT INTO public.faq_categories (slug, sort_order) VALUES
('booking', 1),
('payment', 2),
('cancellation', 3),
('account', 4);

-- Insert FAQ category translations (Turkish)
INSERT INTO public.faq_category_translations (category_id, language, name)
SELECT id, 'tr',
    CASE slug
        WHEN 'booking' THEN 'Rezervasyon'
        WHEN 'payment' THEN 'Ödeme'
        WHEN 'cancellation' THEN 'İptal ve Değişiklik'
        WHEN 'account' THEN 'Hesap'
    END
FROM public.faq_categories;

-- Insert FAQ category translations (English)
INSERT INTO public.faq_category_translations (category_id, language, name)
SELECT id, 'en',
    CASE slug
        WHEN 'booking' THEN 'Booking'
        WHEN 'payment' THEN 'Payment'
        WHEN 'cancellation' THEN 'Cancellation & Changes'
        WHEN 'account' THEN 'Account'
    END
FROM public.faq_categories;

-- Insert sample FAQs
INSERT INTO public.faqs (category_id, slug, sort_order)
SELECT id, 'how-to-book', 1 FROM public.faq_categories WHERE slug = 'booking';

INSERT INTO public.faqs (category_id, slug, sort_order)
SELECT id, 'payment-methods', 1 FROM public.faq_categories WHERE slug = 'payment';

INSERT INTO public.faqs (category_id, slug, sort_order)
SELECT id, 'how-to-cancel', 1 FROM public.faq_categories WHERE slug = 'cancellation';

-- Insert FAQ translations
INSERT INTO public.faq_translations (faq_id, language, question, answer)
SELECT id, 'tr', 'Nasıl rezervasyon yapabilirim?', 'Konaklama yerinizi seçin, tarihlerinizi ve misafir sayınızı belirleyin, ardından "Rezervasyon Yap" butonuna tıklayın.'
FROM public.faqs WHERE slug = 'how-to-book';

INSERT INTO public.faq_translations (faq_id, language, question, answer)
SELECT id, 'en', 'How can I make a reservation?', 'Select your accommodation, choose your dates and number of guests, then click the "Book Now" button.'
FROM public.faqs WHERE slug = 'how-to-book';

INSERT INTO public.faq_translations (faq_id, language, question, answer)
SELECT id, 'tr', 'Hangi ödeme yöntemlerini kabul ediyorsunuz?', 'Kredi kartı, banka havalesi ve tesiste ödeme seçeneklerini kabul ediyoruz.'
FROM public.faqs WHERE slug = 'payment-methods';

INSERT INTO public.faq_translations (faq_id, language, question, answer)
SELECT id, 'en', 'What payment methods do you accept?', 'We accept credit cards, bank transfers, and pay at property options.'
FROM public.faqs WHERE slug = 'payment-methods';

INSERT INTO public.faq_translations (faq_id, language, question, answer)
SELECT id, 'tr', 'Rezervasyonumu nasıl iptal edebilirim?', 'Hesabınıza giriş yapın, "Rezervasyonlarım" bölümüne gidin ve iptal etmek istediğiniz rezervasyonu seçin.'
FROM public.faqs WHERE slug = 'how-to-cancel';

INSERT INTO public.faq_translations (faq_id, language, question, answer)
SELECT id, 'en', 'How can I cancel my reservation?', 'Log in to your account, go to "My Reservations" section and select the booking you want to cancel.'
FROM public.faqs WHERE slug = 'how-to-cancel';

-- Insert popular locations
INSERT INTO public.locations (slug, country_code, is_featured, sort_order) VALUES
('istanbul', 'TR', true, 1),
('antalya', 'TR', true, 2),
('izmir', 'TR', true, 3),
('bodrum', 'TR', true, 4),
('fethiye', 'TR', true, 5),
('marmaris', 'TR', true, 6),
('cesme', 'TR', true, 7),
('kas', 'TR', true, 8);

-- Insert location translations (Turkish)
INSERT INTO public.location_translations (location_id, language, name, description)
SELECT id, 'tr',
    CASE slug
        WHEN 'istanbul' THEN 'İstanbul'
        WHEN 'antalya' THEN 'Antalya'
        WHEN 'izmir' THEN 'İzmir'
        WHEN 'bodrum' THEN 'Bodrum'
        WHEN 'fethiye' THEN 'Fethiye'
        WHEN 'marmaris' THEN 'Marmaris'
        WHEN 'cesme' THEN 'Çeşme'
        WHEN 'kas' THEN 'Kaş'
    END,
    CASE slug
        WHEN 'istanbul' THEN 'Tarihi yarımada ve Boğaz manzarası'
        WHEN 'antalya' THEN 'Türk Rivierası''nın incisi'
        WHEN 'izmir' THEN 'Ege''nin güzel kenti'
        WHEN 'bodrum' THEN 'Tatil cennetleri'
        WHEN 'fethiye' THEN 'Doğa harikası koylar'
        WHEN 'marmaris' THEN 'Akdeniz''in gözbebeği'
        WHEN 'cesme' THEN 'Rüzgar sörfü cenneti'
        WHEN 'kas' THEN 'Sakin Akdeniz kasabası'
    END
FROM public.locations;

-- Insert location translations (English)
INSERT INTO public.location_translations (location_id, language, name, description)
SELECT id, 'en',
    CASE slug
        WHEN 'istanbul' THEN 'Istanbul'
        WHEN 'antalya' THEN 'Antalya'
        WHEN 'izmir' THEN 'Izmir'
        WHEN 'bodrum' THEN 'Bodrum'
        WHEN 'fethiye' THEN 'Fethiye'
        WHEN 'marmaris' THEN 'Marmaris'
        WHEN 'cesme' THEN 'Cesme'
        WHEN 'kas' THEN 'Kas'
    END,
    CASE slug
        WHEN 'istanbul' THEN 'Historic peninsula and Bosphorus views'
        WHEN 'antalya' THEN 'Pearl of the Turkish Riviera'
        WHEN 'izmir' THEN 'Beautiful city of the Aegean'
        WHEN 'bodrum' THEN 'Holiday paradise'
        WHEN 'fethiye' THEN 'Natural wonder bays'
        WHEN 'marmaris' THEN 'Jewel of the Mediterranean'
        WHEN 'cesme' THEN 'Windsurfing paradise'
        WHEN 'kas' THEN 'Quiet Mediterranean town'
    END
FROM public.locations;

-- =====================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- =====================================================

-- Enable RLS on all tables
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_addresses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.properties ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.property_translations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.property_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.property_amenities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.room_translations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.room_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.room_amenities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.room_pricing ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.room_availability ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.booking_payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.favorites ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.support_tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ticket_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.amenities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.amenity_translations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ticket_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ticket_category_translations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.faq_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.faq_category_translations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.faq_translations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.page_translations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.locations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.location_translations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.hotel_applications ENABLE ROW LEVEL SECURITY;

-- Users policies
CREATE POLICY "Users can view their own profile" ON public.users FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update their own profile" ON public.users FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Admins can view all users" ON public.users FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.users WHERE id = auth.uid() AND role IN ('admin', 'support'))
);

-- User addresses policies
CREATE POLICY "Users can manage their own addresses" ON public.user_addresses FOR ALL USING (auth.uid() = user_id);

-- Properties policies (public read for active properties)
CREATE POLICY "Anyone can view active properties" ON public.properties FOR SELECT USING (is_active = TRUE);
CREATE POLICY "Owners can manage their properties" ON public.properties FOR ALL USING (auth.uid() = owner_id);
CREATE POLICY "Admins can manage all properties" ON public.properties FOR ALL USING (
    EXISTS (SELECT 1 FROM public.users WHERE id = auth.uid() AND role = 'admin')
);

-- Property translations (public read)
CREATE POLICY "Anyone can view property translations" ON public.property_translations FOR SELECT USING (TRUE);
CREATE POLICY "Property owners can manage translations" ON public.property_translations FOR ALL USING (
    EXISTS (SELECT 1 FROM public.properties WHERE id = property_id AND owner_id = auth.uid())
);

-- Property images (public read)
CREATE POLICY "Anyone can view property images" ON public.property_images FOR SELECT USING (TRUE);
CREATE POLICY "Property owners can manage images" ON public.property_images FOR ALL USING (
    EXISTS (SELECT 1 FROM public.properties WHERE id = property_id AND owner_id = auth.uid())
);

-- Rooms policies (public read for active rooms)
CREATE POLICY "Anyone can view active rooms" ON public.rooms FOR SELECT USING (is_active = TRUE);
CREATE POLICY "Property owners can manage rooms" ON public.rooms FOR ALL USING (
    EXISTS (SELECT 1 FROM public.properties WHERE id = property_id AND owner_id = auth.uid())
);

-- Room translations (public read)
CREATE POLICY "Anyone can view room translations" ON public.room_translations FOR SELECT USING (TRUE);

-- Bookings policies
CREATE POLICY "Users can view their own bookings" ON public.bookings FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create bookings" ON public.bookings FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Property owners can view their property bookings" ON public.bookings FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.properties WHERE id = property_id AND owner_id = auth.uid())
);
CREATE POLICY "Admins can view all bookings" ON public.bookings FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.users WHERE id = auth.uid() AND role IN ('admin', 'support'))
);

-- Reviews policies
CREATE POLICY "Anyone can view approved reviews" ON public.reviews FOR SELECT USING (is_approved = TRUE);
CREATE POLICY "Users can create reviews for their bookings" ON public.reviews FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own reviews" ON public.reviews FOR UPDATE USING (auth.uid() = user_id);

-- Favorites policies
CREATE POLICY "Users can manage their favorites" ON public.favorites FOR ALL USING (auth.uid() = user_id);

-- Hotel applications policies (public form can submit; only admin/support can view and update)
CREATE POLICY "Anyone can submit hotel application" ON public.hotel_applications FOR INSERT WITH CHECK (TRUE);
CREATE POLICY "Admin and support can view hotel applications" ON public.hotel_applications FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.users WHERE id = auth.uid() AND role IN ('admin', 'support'))
);
CREATE POLICY "Admin and support can update hotel applications" ON public.hotel_applications FOR UPDATE USING (
    EXISTS (SELECT 1 FROM public.users WHERE id = auth.uid() AND role IN ('admin', 'support'))
);

-- Support tickets policies
CREATE POLICY "Users can view their own tickets" ON public.support_tickets FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create tickets" ON public.support_tickets FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Support staff can view assigned tickets" ON public.support_tickets FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.users WHERE id = auth.uid() AND role IN ('admin', 'support'))
);

-- Ticket messages policies
CREATE POLICY "Users can view messages of their tickets" ON public.ticket_messages FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.support_tickets WHERE id = ticket_id AND user_id = auth.uid())
);
CREATE POLICY "Users can send messages to their tickets" ON public.ticket_messages FOR INSERT WITH CHECK (
    EXISTS (SELECT 1 FROM public.support_tickets WHERE id = ticket_id AND user_id = auth.uid())
);

-- Public read policies for reference data
CREATE POLICY "Anyone can view amenities" ON public.amenities FOR SELECT USING (TRUE);
CREATE POLICY "Anyone can view amenity translations" ON public.amenity_translations FOR SELECT USING (TRUE);
CREATE POLICY "Anyone can view ticket categories" ON public.ticket_categories FOR SELECT USING (is_active = TRUE);
CREATE POLICY "Anyone can view ticket category translations" ON public.ticket_category_translations FOR SELECT USING (TRUE);
CREATE POLICY "Anyone can view FAQ categories" ON public.faq_categories FOR SELECT USING (is_active = TRUE);
CREATE POLICY "Anyone can view FAQ category translations" ON public.faq_category_translations FOR SELECT USING (TRUE);
CREATE POLICY "Anyone can view active FAQs" ON public.faqs FOR SELECT USING (is_active = TRUE);
CREATE POLICY "Anyone can view FAQ translations" ON public.faq_translations FOR SELECT USING (TRUE);
CREATE POLICY "Anyone can view active pages" ON public.pages FOR SELECT USING (is_active = TRUE);
CREATE POLICY "Anyone can view page translations" ON public.page_translations FOR SELECT USING (TRUE);
CREATE POLICY "Anyone can view locations" ON public.locations FOR SELECT USING (TRUE);
CREATE POLICY "Anyone can view location translations" ON public.location_translations FOR SELECT USING (TRUE);
CREATE POLICY "Anyone can view property amenities" ON public.property_amenities FOR SELECT USING (TRUE);
CREATE POLICY "Anyone can view room amenities" ON public.room_amenities FOR SELECT USING (TRUE);
CREATE POLICY "Anyone can view room images" ON public.room_images FOR SELECT USING (TRUE);
CREATE POLICY "Anyone can view room pricing" ON public.room_pricing FOR SELECT USING (TRUE);
CREATE POLICY "Anyone can view room availability" ON public.room_availability FOR SELECT USING (TRUE);

-- =====================================================
-- SUPABASE AUTH TRIGGER (Create user profile on signup)
-- =====================================================

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.users (id, email, full_name, avatar_url, role, must_change_password)
    VALUES (
        NEW.id,
        NEW.email,
        COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name'),
        NEW.raw_user_meta_data->>'avatar_url',
        COALESCE((NEW.raw_user_meta_data->>'role')::user_role, 'customer'),
        COALESCE((NEW.raw_user_meta_data->>'must_change_password')::boolean, FALSE)
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- =====================================================
-- COMMENTS FOR DOCUMENTATION
-- =====================================================

COMMENT ON TABLE public.users IS 'User profiles extending Supabase auth';
COMMENT ON TABLE public.properties IS 'Accommodation listings (hotels, villas, apartments, etc.)';
COMMENT ON TABLE public.rooms IS 'Room types within properties';
COMMENT ON TABLE public.bookings IS 'Reservation records';
COMMENT ON TABLE public.reviews IS 'User reviews for properties';
COMMENT ON TABLE public.favorites IS 'User wishlists/favorites';
COMMENT ON TABLE public.support_tickets IS 'Customer support tickets';
COMMENT ON TABLE public.hotel_applications IS 'Hotel/business applications for joining the platform';
COMMENT ON TABLE public.faqs IS 'Frequently asked questions';
COMMENT ON TABLE public.pages IS 'Static content pages (about, privacy, terms)';
COMMENT ON TABLE public.locations IS 'Cities and destinations';

COMMENT ON COLUMN public.properties.property_type IS 'Type: hotel, villa, apartment, bungalow, hostel, camp';
COMMENT ON COLUMN public.users.role IS 'User role: customer, hotel_owner, admin, support';
COMMENT ON COLUMN public.bookings.status IS 'Booking status: pending, confirmed, cancelled, completed, refunded';
