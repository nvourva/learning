import React from 'react';

import ShopData from './shop.data.js';

import PreviewCollection from '../../components/preview-collection/preview-collection.component';

class ShopPage extends React.Component {
    constructor(props)  {
        super(props);

        this.state = {
            collections: ShopData,
        }
    }

    render() {
        const {collections} = this.state;
       return (<div className='shop-page'>
           {
               collections.map(({id, ...otherCollectionProps}) => (
                   <PreviewCollection key={id} {...otherCollectionProps} />
               ))
           }
       </div>)
    }
}

export default ShopPage;