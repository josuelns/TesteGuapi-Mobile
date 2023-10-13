import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image, Button } from 'react-native';
// import { useDispatch } from 'react-redux';
import { styled } from 'nativewind';
import { useNavigation } from '@react-navigation/native';

import DocumentPicker from 'react-native-document-picker';
import { useForm, Controller } from 'react-hook-form';

import RNPickerSelect from 'react-native-picker-select';



const ClientFormScreen = () => {
  const { control, handleSubmit, setValue, watch } = useForm();
  // const dispatch = useDispatch();

  const navigation = useNavigation();

  const onSubmit = (data: any) => {
    console.log(data);
    navigation.navigate('ClientList' as never);

    console.log('click');

    // Validar o email e a senha, se necessário
    // if (!email || !password) {
    //   // alert('Preencha todos os campos');
    //   return;
    // }

    // Simular o login
    // const user = {
    //   id: '1',
    //   name: 'John Doe',
    //   email: email,
    //   password: password
    // };

    // Despachar a ação de login com o usuário
    // dispatch(loginUser(user));
  };

  const handleFilePicker = async () => {
    try {
      const result: any = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      console.log(
        result.uri,
        result.type, // mime type
        result.name,
        result.size
      );
      // You can store the file URI in your form data
      setValue('file', result.uri);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User canceled the picker
      } else {
        throw err;
      }
    }
  };

  // const clientType: any = watch('clientType');

  const clientType: any = watch('clientType');

  const StyledView = styled(View);
  const StyledText = styled(Text);
  const StyledImage = styled(Image);
  const StyledTextInput = styled(TextInput);
  const StyledButton = styled(TouchableOpacity);

  return (
    <StyledView className='h-full w-full flex flex-1 justify-start align-top px-6'>
      <StyledText className='text-center text-3xl text-customGreen font-bold mb-2'>
        NOVO CLIENTE
      </StyledText>
      <StyledText className='text-center text-base text-gray-600 font-semibold'>
        Insira as informações do seu cliente.
      </StyledText>

      <Text>Escolha o tipo de cliente:</Text>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Button title="Pessoa Física" onPress={() => onChange('pessoa_fisica')} />
        )}
        name="clientType"
        defaultValue="pessoa_fisica"
      />
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Button title="Pessoa Jurídica" onPress={() => onChange('pessoa_juridica')} />
        )}
        name="clientType"
      />
      {clientType === 'pessoa_fisica' && (
        <>
          <StyledText className='text-sm mb-1 text-customGreen'>
            Campos específicos para Pessoa Física:
          </StyledText>
          <StyledView className='mb-5'>
            <StyledText className='text-sm absolute top-1 left-14 mb-1 text-customGreen'>CPF:</StyledText>
            <StyledView className='flex flex-row align-middle border-2 border-customGreen rounded-lg px-3 pb-2 pt-3'>
              <StyledImage
                source={require('../../assets/people.png')}
                className='w-7 h-7 mr-2'
              />
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <StyledTextInput
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    secureTextEntry
                    placeholder="Digite seu cpf"
                    className="flex-1 text-base h-9 pt-1 pl-1"
                  />
                )}
                name="password"
                defaultValue=""
              />

            </StyledView>
          </StyledView>
          <StyledView className='mb-5'>
            <StyledText className='text-sm absolute top-1 left-14 mb-1 text-customGreen'>NOME:</StyledText>
            <StyledView className='flex flex-row align-middle border-2 border-customGreen rounded-lg px-3 pb-2 pt-3'>
              <StyledImage
                source={require('../../assets/people.png')}
                className='w-7 h-7 mr-2'
              />
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <StyledTextInput
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    secureTextEntry
                    placeholder="Digite seu nome"
                    className="flex-1 text-base h-9 pt-1 pl-1"
                  />
                )}
                name="password"
                defaultValue=""
              />

            </StyledView>
          </StyledView>
          <StyledView className='mb-5'>
            <StyledText className='text-sm absolute top-1 left-14 mb-1 text-customGreen'>EMAIL:</StyledText>
            <StyledView className='flex flex-row align-middle border-2 border-customGreen rounded-lg px-3 pb-2 pt-3'>
              <StyledImage
                source={require('../../assets/people.png')}
                className='w-7 h-7 mr-2'
              />
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <StyledTextInput
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    secureTextEntry
                    placeholder="Digite seu email"
                    className="flex-1 text-base h-9 pt-1 pl-1"
                  />
                )}
                name="password"
                defaultValue=""
              />

            </StyledView>
          </StyledView>
          <StyledView className='mb-5'>
            <StyledText className='text-sm absolute top-1 left-14 mb-1 text-customGreen'>TELEFONE:</StyledText>
            <StyledView className='flex flex-row align-middle border-2 border-customGreen rounded-lg px-3 pb-2 pt-3'>
              <StyledImage
                source={require('../../assets/people.png')}
                className='w-7 h-7 mr-2'
              />
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <StyledTextInput
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    secureTextEntry
                    placeholder="Digite seu telefone"
                    className="flex-1 text-base h-9 pt-1 pl-1"
                  />
                )}
                name="password"
                defaultValue=""
              />

            </StyledView>
          </StyledView>
        </>
      )}
      {clientType === 'pessoa_juridica' && (
        <>
          <StyledText className='test-sm mb-1 text-customGreen'>
            Campos específicos para Pessoa Jurídica:
          </StyledText>
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <StyledView className='mb-5'>
                <StyledText className='text-sm absolute top-1 left-14 mb-1 text-customGreen'>Cnpj:</StyledText>
                <StyledView className='flex flex-row align-middle border-2 border-customGreen rounded-lg px-3 pb-2 pt-3'>
                  <StyledImage
                    source={require('../../assets/people.png')}
                    className='w-7 h-7 mr-2'
                  />
                  <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <StyledTextInput
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        secureTextEntry
                        placeholder="Digite seu cnpj"
                        className="flex-1 text-base h-9 pt-1 pl-1"
                      />
                    )}
                    name="password"
                    defaultValue=""
                  />
                </StyledView>
              </StyledView>
            )}
            name="cnpj"
          />
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <StyledView className='mb-5'>
                <StyledText className='text-sm absolute top-1 left-14 mb-1 text-customGreen'>Razão:</StyledText>
                <StyledView className='flex flex-row align-middle border-2 border-customGreen rounded-lg px-3 pb-2 pt-3'>
                  <StyledImage
                    source={require('../../assets/people.png')}
                    className='w-7 h-7 mr-2'
                  />
                  <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <StyledTextInput
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        secureTextEntry
                        placeholder="Digite sua razão social"
                        className="flex-1 text-base h-9 pt-1 pl-1"
                      />
                    )}
                    name="password"
                    defaultValue=""
                  />
                </StyledView>
              </StyledView>
            )}
            name="cnpj"
          />
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <StyledView className='mb-5'>
                <StyledText className='text-sm absolute top-1 left-14 mb-1 text-customGreen'>Data de Abertura:</StyledText>
                <StyledView className='flex flex-row align-middle border-2 border-customGreen rounded-lg px-3 pb-2 pt-3'>
                  <StyledImage
                    source={require('../../assets/people.png')}
                    className='w-7 h-7 mr-2'
                  />
                  <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <StyledTextInput
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        secureTextEntry
                        placeholder="Digite sua data de abertura"
                        className="flex-1 text-base h-9 pt-1 pl-1"
                      />
                    )}
                    name="password"
                    defaultValue=""
                  />
                </StyledView>
              </StyledView>
            )}
            name="cnpj"
          />
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <StyledView className='mb-5'>
                <StyledText className='text-sm absolute top-1 left-14 mb-1 text-customGreen'>Telefone:</StyledText>
                <StyledView className='flex flex-row align-middle border-2 border-customGreen rounded-lg px-3 pb-2 pt-3'>
                  <StyledImage
                    source={require('../../assets/people.png')}
                    className='w-7 h-7 mr-2'
                  />
                  <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <StyledTextInput
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        secureTextEntry
                        placeholder="Digite seu telefone"
                        className="flex-1 text-base h-9 pt-1 pl-1"
                      />
                    )}
                    name="password"
                    defaultValue=""
                  />
                </StyledView>
              </StyledView>
            )}
            name="cnpj"
          />
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <StyledView className='mb-5'>
                <StyledText className='text-sm absolute top-1 left-14 mb-1 text-customGreen'>Email:</StyledText>
                <StyledView className='flex flex-row align-middle border-2 border-customGreen rounded-lg px-3 pb-2 pt-3'>
                  <StyledImage
                    source={require('../../assets/people.png')}
                    className='w-7 h-7 mr-2'
                  />
                  <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <StyledTextInput
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        secureTextEntry
                        placeholder="Digite seu email"
                        className="flex-1 text-base h-9 pt-1 pl-1"
                      />
                    )}
                    name="password"
                    defaultValue=""
                  />
                </StyledView>
              </StyledView>
            )}
            name="cnpj"
          />
        </>
      )}
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Button title="Anexar Arquivo" onPress={handleFilePicker} />
        )}
        name="file"
      />
      <StyledButton
        className='w-100 flex align-middle justify-center h-12 p-2 mb-1 mt-8 bg-customGreen rounded-full'
        onPress={handleSubmit(onSubmit)}
      >
        <StyledText className='text-white font-semibold text-center'>Salvar</StyledText>
      </StyledButton>
      <StyledButton
        className='w-100 flex align-middle justify-center h-12 p-2 mb-4 mt-1 bg-white border-customGreen border-2 rounded-full'
        onPress={handleSubmit(onSubmit)}
      >
        <StyledText className='text-customGreen font-semibold text-center'>Voltar</StyledText>
      </StyledButton>
    </StyledView>
  );
};

export default ClientFormScreen;







