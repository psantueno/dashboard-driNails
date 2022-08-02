import React from 'react';
import LastProductInDb from './LastProductDb';
import CategoryInDb from './CategoryInDb';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Product in DB -->*/}
            <LastProductInDb />
            {/*<!-- End content row last Product in Data Base -->*/}

            {/*<!-- Cateogy in DB -->*/}
            <CategoryInDb />

        </div>
    )
}

export default ContentRowCenter;