function GlobalStyle() {    
    return(
        <style global jsx>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
      }
      body {
        font-family: 'Open Sans', sans-serif;
      }
      /* App fit Height */ 
      html, body, #__next {
        min-height: 100vh;
        display: flex;
        flex: 1;
      }
      #__next {
        flex: 1;
      }
      #__next > * {
        flex: 1;
      }
      /* ./App fit Height */ 
    `}</style>
        
    );
    
}

function Title(props) {
    const Tag = props.tag;
    
    return(
        <>
        <Tag>{props.children}
        </Tag>

                <style jsx>{`
                ${Tag}{
                    color: rgb(25,55,80);
                    font-weight: 600;
                    font-size: 20px
        
                }
                `}</style>
        </>
    );
    
}
function HomePage() {
    return(    
    <div>
        <GlobalStyle/>
        <Title tag ="h2"> Bem vindo de volta! </Title>
        <h2> Discord Alura Matrix</h2>
        
    </div>) 

  }
  
  export default HomePage