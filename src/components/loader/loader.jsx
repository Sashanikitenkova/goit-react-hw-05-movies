import { Vortex } from  'react-loader-spinner';
import s from './loader.module.css';

export const Loader = () => {

    return (
          <div className={s.Loader}>
             <Vortex
                visible={true}
                height="80"
                width="80"
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperClass="vortex-wrapper"
                colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
            />
         </div>
          )
};