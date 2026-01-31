'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Plus, Search, MoreHorizontal, Pencil, Trash2, Eye, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from '@/components/ui/table'
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from '@/components/ui/select'
import { useI18n } from '@/lib/i18n'
import { cn } from '@/lib/utils'

const mockProperties = [
  {
    id: '1',
    name: 'Grand Resort & Spa',
    location: 'Antalya',
    type: 'hotel',
    rooms: 120,
    rating: 4.8,
    status: 'active',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=100&h=100&fit=crop',
  },
  {
    id: '2',
    name: 'Boutique Beach Hotel',
    location: 'Bodrum',
    type: 'hotel',
    rooms: 45,
    rating: 4.5,
    status: 'active',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=100&h=100&fit=crop',
  },
  {
    id: '3',
    name: 'Mountain View Lodge',
    location: 'Bolu',
    type: 'bungalow',
    rooms: 20,
    rating: 4.6,
    status: 'pending',
    image: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=100&h=100&fit=crop',
  },
  {
    id: '4',
    name: 'Seaside Villa',
    location: 'Fethiye',
    type: 'villa',
    rooms: 1,
    rating: 4.9,
    status: 'active',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=100&h=100&fit=crop',
  },
  {
    id: '5',
    name: 'City Center Apartment',
    location: 'Istanbul',
    type: 'apartment',
    rooms: 1,
    rating: 4.2,
    status: 'inactive',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=100&h=100&fit=crop',
  },
]

export default function AdminPropertiesPage() {
  const { t } = useI18n()
  const [searchQuery, setSearchQuery] = useState('')
  const [typeFilter, setTypeFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')

  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      active: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
      pending: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
      inactive: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
    }
    const labels: Record<string, string> = {
      active: 'Aktif',
      pending: 'Onay Bekliyor',
      inactive: 'Pasif',
    }
    return (
      <Badge variant="secondary" className={cn("font-normal", styles[status])}>
        {labels[status]}
      </Badge>
    )
  }

  const getTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      hotel: t('nav.hotel'),
      villa: t('nav.villa'),
      apartment: t('nav.apartment'),
      bungalow: t('nav.bungalow'),
      guesthouse: t('nav.guesthouse'),
      camping: t('nav.camping'),
    }
    return labels[type] || type
  }

  const filteredProperties = mockProperties.filter((property) => {
    const matchesSearch = property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = typeFilter === 'all' || property.type === typeFilter
    const matchesStatus = statusFilter === 'all' || property.status === statusFilter
    return matchesSearch && matchesType && matchesStatus
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">{t('admin.properties')}</h1>
          <p className="text-muted-foreground">Tesis yönetimi ve listeleme</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          {t('admin.addProperty')}
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Tesis ara..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Tür" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tüm Türler</SelectItem>
                <SelectItem value="hotel">{t('nav.hotel')}</SelectItem>
                <SelectItem value="villa">{t('nav.villa')}</SelectItem>
                <SelectItem value="apartment">{t('nav.apartment')}</SelectItem>
                <SelectItem value="bungalow">{t('nav.bungalow')}</SelectItem>
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Durum" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tüm Durumlar</SelectItem>
                <SelectItem value="active">Aktif</SelectItem>
                <SelectItem value="pending">Onay Bekliyor</SelectItem>
                <SelectItem value="inactive">Pasif</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tesis</TableHead>
                <TableHead>Konum</TableHead>
                <TableHead>Tür</TableHead>
                <TableHead>Oda</TableHead>
                <TableHead>Puan</TableHead>
                <TableHead>Durum</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProperties.map((property) => (
                <TableRow key={property.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10 rounded-lg overflow-hidden">
                        <Image
                          src={property.image || "/placeholder.svg"}
                          alt={property.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="font-medium">{property.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{property.location}</TableCell>
                  <TableCell>{getTypeLabel(property.type)}</TableCell>
                  <TableCell>{property.rooms}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <span>{property.rating}</span>
                    </div>
                  </TableCell>
                  <TableCell>{getStatusBadge(property.status)}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="h-4 w-4 mr-2" />
                          Görüntüle
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Pencil className="h-4 w-4 mr-2" />
                          Düzenle
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Sil
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
