import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Row } from 'react-bootstrap';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useContext } from 'react';
import { CartContext } from '../Features/CartContext';
import { useState } from 'react';
import { useEffect } from 'react';
import trashIcon from '../images/trashIcon.png';
import plus from '../images/plus.png';
import minus from '../images/minus.png';
import { Image, Col } from 'react-bootstrap';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '75%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function Cart() {
    const { cart, getTotalPrice, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    useEffect(() => {
        console.log('Cart items:', cart);
    }, [cart]);
    return (
        <>
            <Modal
                open={handleOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" fontFamily={"Taviraj"} className='row'>
                        {cart.length === 0 ? (
                            <p>No items in the cart.</p>
                        ) : (
                            cart.map(item =>
                                    < div key={item.id} className='row mt-2' >

                                        <div className='col-5 flex mt-3 gap-2'> <img className='w-32 bg-[#F1DDC9]' src={item.thumbnail} alt={item.title} />

                                            <div className='col-4 text-center '> <p className='text-sm'> {item.title}</p> <p> RP {item.price}</p> </div>
                                        </div>
                                        <div className=" col text-end gap-0  ">
                                            <div className=' flex justify-end flex-col  mt-2'>

                                                <label for="formControlInput" class="form-label text-sm">Select Packaging</label>
                                                <input class="form-control w-50 ms-auto " id="formControlInput" ></input>
                                            </div>
                                            <div className='mt-2 pt-5 flex justify-end'>

                                                <button onClick={() => decreaseQuantity(item.id)} className='bg-transparent py-3 border-2 border-gray-400 px-2  transform transition-transform duration-300 ease-in-out hover:scale-110'>
                                                    <Image src={minus} alt='minus' />
                                                </button>
                                                <span className='mx-1 mt-2'>{item.quantity}</span>
                                                <button onClick={() => increaseQuantity(item.id)} className='bg-custom-red py-2 px-2  transform transition-transform duration-300 ease-in-out hover:scale-110 '>
                                                    <Image src={plus} alt='plus' />
                                                </button>


                                                <h5 className='mx-3 mt-2' > RP {getTotalPrice().toFixed(2)}</h5>

                                                <button onClick={() => removeFromCart(item.id)}> <img className='border-1 border-custom-red p-2' src={trashIcon} alt={trashIcon} /></button>
                                            </div>
                                        </div>
</div>
                                   
                            ))}


                                </Typography >
                    <hr />
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div className=' flex justify-start  '>

                            <label for="formControlInput " class="form-label text-sm">Kode Promo</label>
                            <input class="form-control w-25 bg-white me-auto ms-2  " id="formControlInput" ></input>
                        </div>
                        <div className="col text-end font-taviraj">
                            <h5>Subtotal: RP {getTotalPrice().toFixed(2)} </h5>
                        </div>
                    </Typography>

                    <Button className='w-full text-white' style={{ background: 'rgba(216, 71, 39, 1)', fontFamily: 'Taviraj' }} href='/CheckOut'>
                        CheckOut
                    </Button>
                </Box>
            </Modal >
        </>
    );
}
