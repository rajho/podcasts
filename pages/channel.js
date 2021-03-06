import Layout from '../components/Layout';
import LatestPodcastsWithClick from '../components/LatestPodcastsWithClick';
import SeriesGrid from '../components/SeriesGrid';
import Error from './_error';
import PodcastPlayer from '../components/PodcastPlayer';

export default class extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      openPodcast: null
    }
  }

  static async getInitialProps({query, res}){
    let idChannel = query.id

    try{
      let  [reqChannel, reqSeries, reqAudios] = await Promise.all([
        fetch(`https://api.audioboom.com/channels/${idChannel}`),
        fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`),
        fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`)
      ])

      if(reqChannel.status >= 404) {
        res.statusCode = reqChannel.status
        return { channel: null, audioClips: null, series: null, statusCode: reqChannel.status}
      }

      let dataChannel = await reqChannel.json()
      let channel = dataChannel.body.channel

      
      let dataAudios = await reqAudios.json()
      let audioClips = dataAudios.body.audio_clips
          
      let dataSeries = await reqSeries.json()
      let series = dataSeries.body.channels
      
      return { channel , audioClips, series, statusCode: 200 }
    } catch(e) {
      // res.statusCode = 503
      return { channel: null, audioClips: null, series: null, statusCode: 503}
    }
  }

  openPodcast = (event, podcast) => {
    event.preventDefault()
    this.setState({
      openPodcast: podcast
    })
  }

  closePodcast = (event) => {
    event.preventDefault()
    this.setState({
      openPodcast: null
    })
  }

  render() {
    const { channel, audioClips, series, statusCode } = this.props
    const { openPodcast } = this.state

    if (statusCode !== 200){
      return <Error statusCode={ statusCode }/>
    }

    return (
      <Layout title={`Channel '${channel.title}'`}>

        <div className="banner" style={{ backgroundImage: `url(${channel.urls.banner_image.original})` }} />

        { openPodcast && 
          <div className="modal">
            <PodcastPlayer clip={ openPodcast } onClose={ this.closePodcast }/>
          </div> 
        }
        <h1>{ channel.title }</h1>

        <SeriesGrid series={series} />

        <LatestPodcastsWithClick audioClips={audioClips} onClickPodcast={this.openPodcast}/>

        <style jsx>
        {`        
        .banner {
          width: 100%;
          padding-bottom: 25%;
          background-position: 50% 50%;
          background-size: cover;
          background-color: #aaa;
        }      
        h1 {
          font-weight: 600;
          padding: 15px;
        }
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 99999;
        }
        `}
        </style>       
      </Layout>
    )
  }
}