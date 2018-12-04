export default class extends React.Component {
  render(){
    return (
      <div>
        <h1>¿Quien soy?</h1>
        <h2>¡Ramiro Torrejón!</h2>
        <p>
          Full Stack Software Engineer. Me encanta programar.
          Amo estar al dia en cuanto a las ultimas tecnologias. Sigo el movimiento emprendedor de Startups que
          se apoyan en tecnologia. Si puedo ser de ayuda en alguna Startup no duden en contactarme.
        </p>
        
        <img src="/static/platzi-logo.png" alt="Platzi"/>

        <style jsx>{`          

          h1, h2 {
            color: lightblue;
            text-align: center;
          }          
          p {
            max-width: 50%;
            display: block;
            margin: 8px auto 48px;
            color: #ccc;
            font-family: sans-serif;
            font-size: 16px;
            font-weight: 400;            
            line-height: 1.5;
          }
          img {
            max-width: 50%;
            height: 200px;
            display: block;
            margin: 0 auto;
          }        
        `} 
        </style>

        <style jsx global>{`
          body {
            background: #000000;
          }
        `}</style>
      </div> 
    )
  }
}