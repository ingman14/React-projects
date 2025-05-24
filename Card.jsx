import ProfilePic from './images/account.jpeg'

function Card() {
	

	return <div className='card'>
		<img src={ProfilePic} alt="profile picture" className='card-image'/>
		<h2>User2</h2>
		<p>I learn React and play football</p>
	</div>
		
}

export default Card;
