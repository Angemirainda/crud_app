//CreateClient.jsx

import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const CreateClient = () => {
    const [client, setClient] = useState({nom:'', adresse:'', tel:''});
    const navigate = useNavigate();


    const handleCreate = async() =>{
        await axios.post('http://localhost:3001/clients', client); //ajout client
        navigate('/clients', {replace: true}); //apres l'ajout retour a la liste
    };
//     return(
//         <div>
//             <center>
//                 <h1>Creer un nouveau client</h1>
//                 <form>
//                     <label>Nom du client: </label>
//                     <input type="text" value={client.nom} onChange={(e) => setClient({...client, nom: e.target.value})} />
//                     <br /><label>Adresse: </label>
//                     <input type="text" value={client.adresse} onChange={(e) => setClient({...client, adresse: e.target.value})} />
//                     <br /><label>Telephone: </label>
//                     <input type="text" value={client.tel} onChange={(e) => setClient({...client, tel: e.target.value})} />
//                     <br/> <button type="button" onClick={handleCreate}>Creer</button>
                    
    
//                 </form>
//             </center>
//         </div>
    
//     );

// };


return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-8">
        <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Créer un Nouveau Client</h1>
        </div>

        <form className="space-y-6">
            <div>
                <label htmlFor="nom" className="block text-xl font-semibold  text-gray-700">Nom du client</label>
                <input
                    id="nom"
                    type="text"
                    value={client.nom}
                    onChange={(e) => setClient({ ...client, nom: e.target.value })}
                    className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Nom du client"
                />
            </div>

            <div>
                <label htmlFor="adresse" className="block text-xl font-semibold text-gray-700">Adresse</label>
                <input
                    id="adresse"
                    type="text"
                    value={client.adresse}
                    onChange={(e) => setClient({ ...client, adresse: e.target.value })}
                    className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Adresse du client"
                />
            </div>

            <div>
                <label htmlFor="tel" className="block text-xl font-semibold text-gray-700">Téléphone</label>
                <input
                    id="tel"
                    type="text"
                    value={client.tel}
                    onChange={(e) => setClient({ ...client, tel: e.target.value })}
                    className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Téléphone du client"
                />
            </div>

            <div className="text-center mt-6">
                <button
                    type="button"
                    onClick={handleCreate}
                    className="w-full bg-blue-500 text-white py-2 rounded-md shadow-lg  font-semibold text-xl hover:bg-blue-600 transition duration-300"
                >
                    Créer
                </button>
            </div>
        </form>
    </div>
);
}
export default CreateClient;
