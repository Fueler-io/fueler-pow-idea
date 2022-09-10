import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import logo from './images/logo.jpeg'

function App() {
	return (
		<div className="container-fluid main">
			{/* Header */}
			<header className="main-header my-3">
				<div className="main-header-background-image">
					<img src="https://s3.us-east-2.amazonaws.com/fueler.io-images/brands/tcc/header-banner.jfif" alt="" />
				</div>
				<div className="container">
					<div className="main-header-profile mb-4">

						<div className="row justify-content-center">
							<div className="col-md-11">
								<div className='d-flex justify-content-between align-items-end'>
									<div>
										<img className="rounded-circle mb-4" src={logo} alt="" />
									</div>
									<div>
										<a href="https://www.theclueless.company/" id='website-button' className='btn primary-button px-3 fw-500'>Our Website</a>
									</div>
								</div>
								<h2 className='fw-bold primary-color'>The Clueless Company</h2>
								<p className='text-gray fw-500'>We go beyond the conventional methods of consulting, and provides actionable mentoring and strategies to the clueless entrepreneurs.</p>

								<a href="https://www.theclueless.company/" target="_blank" rel="noopener noreferrer" id='website-button-botom' className='btn primary-button px-3 fw-500'>Explore Website</a>
							
							</div>
						</div>
						
					</div>
				</div>
			</header>


			<section className='main-body my-3'>

				<div className='container main-body-heading text-center py-3'>
					<h1 className='fw-bold primary-color'>Our Proof of Work Ideas</h1>
				</div>

				<div className="container">
					<div className="row justify-content-center py-4">
						{/* POW IDea 1 */}
						<div className="col-md-11 mb-4 pb-2">
							<div className="card card-pink px-3">
								<div className="card-body">
									<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center">
										<div className='d-flex justify-content-start flex-wrap align-items-center'>
											<div className='card-icon my-3 mr-2'>
												<img src="https://res.cloudinary.com/kiwismedia/image/upload/v1641149431/fueler-emoji/wgyvec0qmcjctujfslx7.png" alt="" />
											</div>
											<div className='card-content'>
												<p className='mb-0 text-basic fw-500'>Come up with a list of 30 brands who don't have blog on their website</p>
											</div>
										</div>
										<div className='card-tag'>
											<div className='card-tag-button px-3 py-2'>
												Marketing
											</div>
										</div>
									</div>
								</div>
							</div>

						</div>


						{/* POW IDea 1 */}
						<div className="col-md-11 mb-4 pb-2">
							<div className="card card-green px-3">
								<div className="card-body">
									<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center">
										<div className='d-flex justify-content-start flex-wrap align-items-center'>
											<div className='card-icon my-3 mr-2'>
												<img src="https://res.cloudinary.com/kiwismedia/image/upload/v1641149685/fueler-emoji/ftojrqu17nf5cjkm6ypb.png" alt="" />
											</div>
											<div className='card-content'>
												<p className='mb-0 text-basic fw-500'>Write a case study on "How Meme marketing is helping brands grow their internet presence?" </p>
											</div>
										</div>
										<div className='card-tag'>
											<div className='card-tag-button px-3 py-2'>
												Writing
											</div>
										</div>
									</div>
								</div>
							</div>

						</div>


						{/* POW IDea 1 */}
						<div className="col-md-11 mb-4 pb-2">
							<div className="card card-teal px-3">
								<div className="card-body">
									<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center">
										<div className='d-flex justify-content-start flex-wrap align-items-center'>
											<div className='card-icon my-3 mr-2'>
												<img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/man-artist_1f468-200d-1f3a8.png" alt="" />
											</div>
											<div className='card-content'>
												<p className='mb-0 text-basic fw-500'>Prepare a social media marketing plan to grow Manasi to 10k followers on Twitter</p>
											</div>
										</div>
										<div className='card-tag'>
											<div className='card-tag-button px-3 py-2'>
												Marketing
											</div>
										</div>
									</div>
								</div>
							</div>

						</div>


						{/* POW IDea 1 */}
						<div className="col-md-11 mb-4 pb-2">
							<div className="card card-peach px-3">
								<div className="card-body">
									<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center">
										<div className='d-flex justify-content-start flex-wrap align-items-center'>
											<div className='card-icon my-3 mr-2'>
												<img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/fire_1f525.png" alt="" />
											</div>
											<div className='card-content'>
												<p className='mb-0 text-basic fw-500'>Come up with a list of prospect who is running a business with $100k YOY revenue</p>
											</div>
										</div>
										<div className='card-tag'>
											<div className='card-tag-button px-3 py-2'>
												Marketing
											</div>
										</div>
									</div>
								</div>
							</div>

						</div>
						{/* POW IDea 1 */}
						<div className="col-md-11 mb-4 pb-2">
							<div className="card card-blue px-3">
								<div className="card-body">
									<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center">
										<div className='d-flex justify-content-start flex-wrap align-items-center'>
											<div className='card-icon my-3 mr-2'>
												<img src="https://res.cloudinary.com/kiwismedia/image/upload/v1641149894/fueler-emoji/cvvhxbsssxjqy26ctcfe.png" alt="" />
											</div>
											<div className='card-content'>
												<p className='mb-0 text-basic fw-500'>
													Write a Twitter thread on "10 Tips to write a cold email that get response"
												</p>
											</div>
										</div>
										<div className='card-tag'>
											<div className='card-tag-button px-3 py-2'>
												Writing
											</div>
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>

			</section>


			<footer className='my-4'>
				<div className='text-center pb-5'>
					<h5 className='mb-0 py-4'>
						<a href="https://fueler.io">
							Powered by <span><img src="https://fueler.io/images/fueler/main/fueler_logo.svg" width={120} alt="" /></span>
						</a>
					</h5>
				</div>
			</footer>

		</div>
	);
}

export default App;
