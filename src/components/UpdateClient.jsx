//UpdateClient.jsx
import React, {useState, useEffect} from 'react';
import {Link ,redirect, useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';

const UpdateClient = () => {
    const { id } = useParams(); //recuperation de l'id du client a modifier
    const [client, setClient] = useState({nom:'', adresse:'', tel:''});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchClient = async () => {
            const response = await axios.get(`http://localhost:3001/clients/${id}`);
            setClient(response.data); //recuptation des infos du client a modifier
        };

        fetchClient();
    }, [id]);

    const handleUpdate = async () => {
        await axios.put(`http://localhost:3001/clients/${id}`, client);
        navigate('/client', {replace: true}); //retour a la liste
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
//                     <br/> <button type="button" onClick={handleUpdate}>Creer</button>
//                 </form>
//             </center>
//         </div>
//     );
// }
return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-8">
        <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Modifier le client</h1>
        </div>

        <form className="space-y-6">
            <div>
                <label htmlFor="nom" className="block text-xl font-semibold text-gray-700">Nom du client</label>
                <input
                    id="nom"
                    type="text"
                    value={client.nom}
                    onChange={(e) => setClient({ ...client, nom: e.target.value })}
                    className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                />
            </div>

            <div className="text-center">
                <button
                    type="button"
                    onClick={handleUpdate}
                    className="w-full bg-blue-500 text-white py-2 rounded-md shadow-lg hover:bg-blue-600 transition duration-300"
                >
                    Mettre à jour
                </button>
            </div>
        </form>

        <div className="text-center mt-4">
            <Link to="/clients" className="text-blue-500 hover:underline">Retour à la liste des clients</Link>
        </div>
    </div>
);
};

export default UpdateClient;