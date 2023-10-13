import { styled } from 'nativewind';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { authLogout } from '../../store/auth/authActions';

const clientsData = [
    { id: 1, name: 'Cliente 1', email: 'cliente1@email.com', phone: '123-456-7890' },
    { id: 2, name: 'Cliente 2', email: 'cliente2@email.com', phone: '987-654-3210' },
    { id: 3, name: 'Cliente 2', email: 'cliente2@email.com', phone: '987-654-3210' },
    { id: 4, name: 'Cliente 2', email: 'cliente2@email.com', phone: '987-654-3210' },
    { id: 5, name: 'Cliente 2', email: 'cliente2@email.com', phone: '987-654-3210' },
    { id: 6, name: 'Cliente 2', email: 'cliente2@email.com', phone: '987-654-3210' },
    { id: 7, name: 'Cliente 2', email: 'cliente2@email.com', phone: '987-654-3210' },
    // Adicione mais clientes conforme necessário
];



const ClientListScreen = () => {
    const [clients, setClients] = useState(clientsData);
    const [selectedClient, setSelectedClient] = useState(null);

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const toggleOptions = (clientId: any) => {
        if (selectedClient === clientId) {
            setSelectedClient(null); // Fechar as opções se já estiverem abertas
        } else {
            setSelectedClient(clientId); // Abrir as opções para o cliente selecionado
        }
    };

    const handleDelete = (clientId: any) => {

        setClients((prevClients) => prevClients.filter((client) => client.id !== clientId));
        setSelectedClient(null); // Fechar as opções após a exclusão
    };

    const handleEdit = (clientId: string) => {
        navigation.navigate('ClientForm' as never);
    }

    const handleAdd = () => {
        navigation.navigate('ClientForm' as never);
    }

    const handleLogout = () => {
      
        dispatch(authLogout());
    }


    const StyledImage = styled(Image);
    const StyledView = styled(View);
    const StyledText = styled(Text);
    const StyledButton = styled(TouchableOpacity);

    return (
        <>
            <ScrollView style={styles.container}>
                <StyledButton onPress={() => handleLogout()}>
                    <StyledText className='text-right text-sm text-red-500 font-semibold' >Sair</StyledText>
                </StyledButton>
                <StyledImage
                    source={require('../../assets/clients.png')}
                    className='w-64 h-44 self-center mt-8'
                />
                <StyledView className='my-6'>
                    <StyledText className='text-center text-3xl text-customGreen font-bold mb-2' >LISTA DE CLIENTES</StyledText>
                    <StyledText className='text-center text-base text-gray-600 font-semibold' >Consulte as informações do seu cliente.</StyledText>
                </StyledView>
                {clients.map((item) => (
                    <View style={styles.clientItem} key={item.id}>
                        <TouchableOpacity onPress={() => toggleOptions(item.id)}>
                            <View style={styles.clientInfo}>
                                <Image
                                    source={require('../../assets/people.png')}
                                    style={{ width: 50, height: 50, marginRight: 16 }}
                                />
                                <View>
                                    <Text style={styles.clientName}>{item.name}</Text>
                                    <Text style={styles.clientEmail}>{item.email}</Text>
                                    <Text style={styles.clientPhone}>{item.phone}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        {selectedClient === item.id && (
                            <View style={styles.optionsOverlay}>
                                <View style={styles.optionButtonsContainer}>
                                    <TouchableOpacity
                                        onPress={() => handleEdit(item.id.toString())}
                                        style={styles.optionButton}
                                    >
                                        <Text style={styles.optionText}>Editar</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => handleDelete(item.id)}
                                        style={styles.optionButton}
                                    >
                                        <Text style={styles.optionText}>Apagar</Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity
                                    onPress={() => setSelectedClient(null)}
                                    style={styles.closeButton}
                                >
                                    <Text style={styles.closeButtonText}>X</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
                ))}
            </ScrollView>
            <TouchableOpacity
                style={styles.floatingButton}
                onPress={() => handleAdd()}
            >
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    clientItem: {
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#01656e',
        borderRadius: 8,
        padding: 16,
    },
    clientInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 16,
    },
    clientName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    clientEmail: {
        fontSize: 16,
        color: '#333',
    },
    clientPhone: {
        fontSize: 16,
        color: '#555',
    },
    optionsOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#01656e3b', // Fundo escuro semitransparente
        justifyContent: 'center',
        alignItems: 'center',
    },
    optionButtonsContainer: {
        flexDirection: 'row', // Layout horizontal
        justifyContent: 'space-between', // Espaço igual entre os botões
    },
    optionButton: {
        backgroundColor: '#01656e', // Cor do botão de apagar (personalize conforme necessário)
        padding: 8,
        borderRadius: 4,
        margin: 8,
        width: 120,
        height: 40,
    },
    optionText: {
        color: 'white', // Cor do texto do botão
        fontWeight: 'bold',
        textAlign: 'center'
    },
    closeButton: {
        position: 'absolute',
        top: 8,
        right: 8,
        backgroundColor: 'white', // Cor do botão de fechar
        borderRadius: 12,
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    closeButtonText: {
        color: 'black', // Cor do texto do botão de fechar
        fontSize: 16,
        fontWeight: 'bold',
    },
    options: {
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    floatingButton: {
        position: 'absolute',
        bottom: 16,
        right: 16,
        width: 56,
        height: 56,
        backgroundColor: "#01656e", // Cor de fundo do botão
        borderRadius: 28, // Metade da largura/altura para torná-lo circular
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4, // Sombreamento para dar uma aparência de elevação
    },
    buttonText: {
        fontSize: 24,
        color: 'white', // Cor do texto do botão
        fontWeight: 'bold',
    },
});

export default ClientListScreen;