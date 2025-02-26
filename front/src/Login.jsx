{ useState } from 'react';
import logo from './assets/edunexux.png'
import {Form, Input, Button} from "@heroui/react";
import { useNavigate } from 'react-router-dom';

function Login() {

    const [action, setAction] = useState(null);
    const navigate = useNavigate()

  return (
    <div className=" bg-[#388388] h-screen w-screen flex justify-center items-center">

        <div className=" grid grid-cols-2 rounded-xl shadow-2xl bg-slate-100">

            <div className=" bg-gradient-to-br from-[#388388] rounded-xl to-[#6bbdbd] flex justify-center items-center">
                <img src={logo} alt="" />
            </div>

            <div className='flex flex-col  '>
                <div className=' h-32 flex items-center justify-center border-b-2 mx-5' >
                    <h1 className="text-[#000000] text-center text-4xl font-bold drop-shadow-lg">Bienvenue</h1>
                </div>
                <div className=' h-full flex justify-center items-center'>
                <Form
                className="w-full max-w-xs flex flex-col gap-4 justify-center items-center"
                onReset={() => setAction("reset")}
                onSubmit={(e) => {
                    e.preventDefault();
                    let data = Object.fromEntries(new FormData(e.currentTarget));
                    setAction(`submit ${JSON.stringify(data)}`);
                    navigate('/home')

                }}>

                 <Input className='mb-7'
                 isRequired
                 errorMessage="Veuillez entrer une adresse e-mail valide"
                 label="E-mail"
                 labelPlacement="outside"
                  name="email"
                  placeholder="Entrez votre adresse e-mail"
                 type="email"
                />

                 <Input className='mb-7'
                  isRequired
                  errorMessage="Veuillez saisir votre mot de passe"
                  label="Mot de passe"
                 labelPlacement="outside"
                  name="motDePasse"
                 placeholder="Entrez votre mot de passe"
                 type="password"
                />
 
                    
                    <div className="flex gap-2">
                        <Button className='bg-[#74DFA2]' type="submit">
                        Confirmer
                        </Button>
                        <Button type="reset" variant="flat">
                        Réinitialiser
                        </Button>
                    </div>

                </Form>
                </div>
                

            </div>

        </div>
      
    </div>
  )
}

export default Login

