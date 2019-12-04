import DelayLoading from '../components/DelayLoading'
import Loadable from 'react-loadable'
export const Index = Loadable({loader: () => import('../pages/Index'), loading: DelayLoading, delay: 3000});
export const Profile = Loadable({loader: () => import('../pages/Profile'), loading: DelayLoading, delay: 3000});
export const NoFound = Loadable({loader: () => import('../pages/404'), loading: DelayLoading, delay: 3000});