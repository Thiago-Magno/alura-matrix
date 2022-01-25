import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import React from "react";
import { useRouter } from 'next/router'
import appConfig from "../config.json";




function Title(props) {
    const Tag = props.tag || 'h1';
    
    return(
        <>
        <Tag>{props.children}
        </Tag>

                <style jsx>{`
                ${Tag}{
                    color: ${appConfig.theme.colors.neutrals['500']};
                    font-weight: 600;
                    font-size: 20px
        
                }
                `}</style>
        </>
    );
    
}
// function HomePage() {
//     return(    
//     <div>
//         <GlobalStyle/>
//         <Title tag ="h2"> Bem vindo de volta! </Title>
//         <h2> Discord Alura Matrix</h2>
        
//     </div>) 

//   }
  
//   export default HomePage
export default function PaginaInicial() {
    // const username = 'Thiago-Magno';
    const [username, setUsername]= React.useState('Thiago-Magno');
    const roteamento = useRouter();

    return (
      <>
        
        <Box
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            //backgroundColor: appConfig.theme.colors.primary[800],
            backgroundImage: 'url(https://i.pinimg.com/originals/a9/32/9b/a9329b6beb4d240a05cef743877b59eb.jpg)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
          }}
        >
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
              width: '100%', maxWidth: '700px',
              borderRadius: '5px', padding: '32px', margin: '16px',
              boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
              backgroundColor: appConfig.theme.colors.neutrals[700],
            }}
          >
            {/* Formulário */}
            <Box
              as="form"
              //quando da submit num form o comportamento padrão é
              //de dar refresh o codigo abaixo previne isso
              onSubmit={function (InfoDoEvento) {
                console.log("Pagina Enviada!");
                //previne a pagina de dar refresh
                InfoDoEvento.preventDefault();
                roteamento.push('/chat');
              }}
              styleSheet={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
              }}
            >
              <Title tag="h2">Boas vindas de volta!</Title>
              <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
                {appConfig.name}
              </Text>
  
              <TextField 
                value ={username}
                onChange={function handle(event) {
                  console.log("usuario digitou", event.target.value);
                  //Onde ta o valor?
                  const valor = event.target.value;
                  //Trocar o valor da variavel
                  //atraves do REact e avisa quem precisa
                  setUsername(valor);


                }}
                fullWidth
                textFieldColors={{
                  neutral: {
                    textColor: appConfig.theme.colors.neutrals[100],
                    mainColor: appConfig.theme.colors.neutrals[900],
                    mainColorHighlight: appConfig.theme.colors.primary[500],
                    backgroundColor: appConfig.theme.colors.neutrals[800],
                  },
                }}
              />
              <Button
                type='submit'
                label='Entrar'
                fullWidth
                buttonColors={{
                  contrastColor: appConfig.theme.colors.neutrals["050"],
                  mainColor: appConfig.theme.colors.primary[500],
                  mainColorLight: appConfig.theme.colors.primary[500],
                  mainColorStrong: appConfig.theme.colors.primary[700],
                }}
              />
            </Box>
            {/* Formulário */}
  
  
            {/* Photo Area */}
            <Box
              styleSheet={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '200px',
                padding: '16px',
                backgroundColor: appConfig.theme.colors.neutrals[800],
                border: '1px solid',
                borderColor: appConfig.theme.colors.neutrals[500],
                borderRadius: '10px',
                flex: 1,
                minHeight: '240px',
              }}
            >
              <Image
                styleSheet={{
                  borderRadius: '50%',
                  marginBottom: '16px',
                }}
                src={`https://github.com/${username}.png`|| `https://cdn-icons.flaticon.com/png/512/1144/premium/1144760.png?token=exp=1643131856~hmac=49e66cabaf7d513a943b7f417e7fb47c`}
              />
              <Text
                variant="body4"
                styleSheet={{
                  color: appConfig.theme.colors.neutrals[200],
                  backgroundColor: appConfig.theme.colors.neutrals[900],
                  padding: '3px 10px',
                  borderRadius: '1000px'
                }}
              >
                {username}
              </Text>
            </Box>
            {/* Photo Area */}
          </Box>
        </Box>
      </>
    );
  }