import {useQuery} from '@tanstack/react-query';
import {getPhoto} from '../../api/IgetPhoto';

export const UseGetPhoto = () => {
  const {isLoading, data, isError} = useQuery(['getPhoto'], getPhoto);
  return {data, isLoading, isError};
};
