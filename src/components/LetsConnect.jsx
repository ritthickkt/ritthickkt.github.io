import './LetsConnect.css'
import './SectionTitle.css'

function LetsConnect() {
  return (
    <div className="lets-connect">
      <div className='section'>
        <text className='section-name'>Let's Connect</text>
      </div>
      <hr className="dotted-line" />
      <text className='call-to-action'>Let's contribute or build something amazing together!</text>
      <button className='email' onClick={() => window.location.href = 'mailto:ritthickthiaga@gmail.com'}>ritthickthiaga@gmail.com</button>
    </div>
  )
}

export default LetsConnect