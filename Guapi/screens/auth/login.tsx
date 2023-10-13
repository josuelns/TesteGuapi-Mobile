import React from 'react';
import { View, TextInput, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';
import { authLogin } from '../../store/auth/authActions';
import { styled } from 'nativewind';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { AuthParams } from '../../domains/auth/AuthTypes';

const validationSchema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  password: yup.string().required('Senha é obrigatória'),
});

const LoginScreen = () => {
  const { control, handleSubmit } = useForm<AuthParams>();

  const dispatch = useDispatch();

  const onSubmit = async (data: AuthParams) => {
    await validationSchema.validate(data);
    dispatch(authLogin(data.email, data.password));

  };

  const StyledView = styled(View);
  const StyledText = styled(Text);
  const StyledImage = styled(Image);
  const StyledTextInput = styled(TextInput);
  const StyledButton = styled(TouchableOpacity);

  return (
    <StyledView className='h-full w-full flex flex-1 justify-start align-top px-6'>
      <StyledImage
        source={require('../../assets/logo-v2.png')}
        className='w-24 h-24 self-center mt-8'
      />
      <StyledView className='my-6'>
        <StyledText className='text-center text-3xl text-customGreen font-bold mb-2' >Bem-Vindo!</StyledText>
        <StyledText className='text-center text-base text-gray-600 font-semibold' >Insira seus dados para acompanhar seus clientes.</StyledText>
      </StyledView>
      <SafeAreaView>
        <StyledView className='mb-5'>
          <StyledText className='text-sm absolute top-1 left-14 mb-1 text-customGreen'>Email:</StyledText>
          <StyledView className='flex flex-row align-middle border-2 border-customGreen rounded-lg px-3 pb-2 pt-3'>
            <StyledImage
              source={require('../../assets/email.png')}
              className='w-7 h-7 mr-2'
            />
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <StyledTextInput
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder="Digite seu Email"
                  className="flex-1 text-base h-9 pt-1 pl-1"
                />
              )}
              name="email"
              defaultValue=""
            />
          </StyledView>
        </StyledView>

        <StyledView className='mb-5'>
          <StyledText className='text-sm absolute top-1 left-14 mb-1 text-customGreen'>Senha:</StyledText>
          <StyledView className='flex flex-row align-middle border-2 border-customGreen rounded-lg px-3 pb-2 pt-3'>
            <StyledImage
              source={require('../../assets/lock.png')}
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
                  placeholder="Digite sua sebga"
                  className="flex-1 text-base h-9 pt-1 pl-1"
                />
              )}
              name="password"
              defaultValue=""
            />
          </StyledView>
        </StyledView>
        <StyledButton
          className='w-100 flex align-middle justify-center h-12 p-2 mb-4 mt-8 bg-customGreen rounded-full'
          onPress={handleSubmit(onSubmit)}
        >
          <StyledText className='text-white font-semibold text-center' >Acessar</StyledText>
        </StyledButton>
        <StyledButton>
          <StyledText className='text-center text-sm text-customGreen font-semibold' >Esqueci minha senha.</StyledText>
        </StyledButton>
      </SafeAreaView>
    </StyledView>

  );
};

export default LoginScreen;