//ClientDetails
import React, {useState, useEffect} from 'react';
import {useParams, useNavigate, Link} from 'react-router-dom';
import axios from 'axios';

const ClientDetails = () => {
    const { id } = useParams();// le hook "useParams" permet de recuperer "id" l'identifiant du client a afficher a partir de l'url 
    const [client, setClient] = useState({});
    const history = useNavigate();

    useEffect(() => {
        const fetchClient = async () => {
            const response = await axios.get(`http://localhost:3001/clients/${id}`);
            setClient(response.data);
        };

        fetchClient();
    }, [id]);

//   
return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg mt-8">
        <div className="text-center mb-6">
            <h1 className="text-4xl font-semibold text-gray-800">Détails du Client</h1>
        </div>

        <div className="space-y-4">
            <p className="text-lg text-gray-700">
                <span className="font-semibold">Nom du client :</span> {client.nom}
            </p>
            <p className="text-lg text-gray-700">
                <span className="font-semibold">Adresse :</span> {client.adresse}
            </p>
            <p className="text-lg text-gray-700">
                <span className="font-semibold">Téléphone :</span> {client.tel}
            </p>
        </div>

        <div className="text-center mt-8">
            <Link 
                to="/clients"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out"
            >
                Retour à la liste des clients
            </Link>
        </div>
    </div>
);
};

export default ClientDetails;