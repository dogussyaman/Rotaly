import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '@/store/dashboard/dashboard-slice';

export const usePageTitle = (title: string) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (title) {
      dispatch(setPageTitle(title));
    }

    // Cleanup - component unmount olduğunda title'ı temizle
    return () => {
      dispatch(setPageTitle(""));
    };
  }, [title, dispatch]);
};
