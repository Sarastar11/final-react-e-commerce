import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
function ProductData() {
  let [watches, setWatches] = useState([])
  async function getWatches() {
    let res = await axios.get('https://dummyjson.com/products/category/mens-watches?limit=1&skip=2&select=description,dimensions,weight,returnPolicy,meta')
    setWatches(res.data.products)
  }
  useEffect(() => {
    getWatches();
  }
    , [])

  return (<>
    <Card className="card  my-5 border-0 bg-transparent" style={{ fontFamily: 'Taviraj', fontWeight: '600',marginLeft:'10%',marginRight:'10%' }}>
      <div className="card-header bg-transparent" >
        <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
          <li className="nav-item " role="presentation">
            <a className="nav-link active border-0 bg-transparent  fs-5" id="Detail-tab" data-bs-toggle="tab" href="#Detail" role="tab" aria-controls="Detail" aria-selected="true"> Detail</a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link border-0 mx-4 text-secondary bg-transparent  fs-5" id="Warranty-tab" data-bs-toggle="tab" href="#Warranty" role="tab" aria-controls="Warranty" aria-selected="true">Warranty</a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link border-0 bg-transparent text-secondary  fs-5" id="custom-tab" data-bs-toggle="tab" href="#Custom-tab" role="tab" aria-controls="Custom Engrave" aria-selected="true">Custom Engrave</a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link border-0 bg-transparent text-secondary fs-5 " id="Adjust-tab" data-bs-toggle="tab" href="#How to Adjust" role="tab" aria-controls="How to Adjust" aria-selected="true">How to Adjust</a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link border-0 bg-transparent text-secondary fs-5 " id="care-tab" data-bs-toggle="tab" href="#How to Care" role="tab" aria-controls="How to Care" aria-selected="true">How to Care</a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link border-0 bg-transparent text-secondary fs-5" id="Gallery-tab" data-bs-toggle="tab" href="#Gallery" role="tab" aria-controls="Gallery" aria-selected="true">Gallery</a>
          </li>
        </ul>
      </div>
      <div className="card-body">
        <div className="tab-content" id="myTabContent">

          <div >
            {watches.map((watch) =>
              <div key={watch.id} className="tab-pane fade show active mt-3" id="Detail" role="tabpanel" aria-labelledby="Detail-tab">     <h5>Description</h5> <br />
                <p className=' text-slate-500 font-normal'>{watch.description}</p>
                <h5 className='mt-5'>Dimensions</h5>
                <p className='font-normal mt-4 text-secondary'> Width :   {watch.dimensions.width}</p>
                <p className='font-normal text-secondary' > Height :    {watch.dimensions.height}</p>
                <p className='font-normal text-secondary' > Depth  :    {watch.dimensions.depth}</p>
                <h5 className='mt-5'>Weight</h5>
                <p className='font-normal text-secondary mt-4' > " {watch.weight} "</p>
                <h5 className='mt-5'>Return Policy</h5>
                <p className='font-normal text-secondary mt-4' >  {watch.returnPolicy} </p>
                <h5 className='mt-5'>Meta</h5>
                <p className='font-normal text-secondary mt-4' > Created At :    {watch.meta.createdAt} </p>
                <p className='font-normal text-secondary mt-4' > Updated At :   {watch.meta.updatedAt} </p>
                <p className='font-normal text-secondary mt-4' > Bar Code :   {watch.meta.barcode} </p>
              </div>
            )}
          </div>

          <div className="card-body hidden">
            <div className="tab-pane fade" id="Warranty" role="tabpanel" aria-labelledby="Warranty-tab">Lorem  dolor sit amet consectetur adipisicing elit. Iure, asperiores provident ea eaque quis omnis adipisci in exercitationem necessitatibus dolorem.</div>
            <div className="tab-pane fade " id="Custom" role="tabpanel" aria-labelledby="Custom-tab"> ipsum  sit amet consectetur adipisicing elit. Eligendi alias praesentium illo omnis adipisci ipsa suscipit rerum quidem doloribus magnam?</div>
            <div className="tab-pane fade " id="Adjust" role="tabpanel" aria-labelledby="Adjust-tab"> ipsum dolor sit amet consectetur adipisicing elit. Eligendi alias praesentium illo omnis adipisci ipsa suscipit rerum quidem doloribus magnam?</div>
            <div className="tab-pane fade " id="Detail" role="tabpanel" aria-labelledby="Detail-tab"> ipsum dolor sit amet consectetur adipisicing elit. Eligendi alias praesentium illo omnis adipisci ipsa suscipit rerum quidem doloribus magnam?</div>
            <div className="tab-pane fade " id="Detail" role="tabpanel" aria-labelledby="Detail-tab"> ipsum dolor sit amet consectetur adipisicing elit. Eligendi alias praesentium illo omnis adipisci ipsa suscipit rerum quidem doloribus magnam?</div>


          </div>
        </div>
      </div>
    </Card>
  </>
  );
}
export default ProductData;