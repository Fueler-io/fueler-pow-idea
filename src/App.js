import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import logo from './images/logo.png'
import header from './images/header-banner.jpg'
import mobile_cta from './images/CTA_mobile.jpg'
import cta from './images/CTA-web.jpg'

function App() {
	return (
		<div className="container-fluid main">
			{/* Header */}
			<header className="main-header my-3">
				<div className="main-header-background-image">
					<img src={header} alt="" />
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
										<a href="https://www.fueler.io" id='website-button' className='btn primary-button px-3 fw-500'>Our Website</a>
									</div>
								</div>
								<h2 className='fw-bold primary-color'>Fueler</h2>
								<p className='text-gray fw-500'>We go beyond the conventional methods of consulting, and provides actionable mentoring and strategies to the clueless entrepreneurs.</p>

								<a href="https://www.fueler.io/" target="_blank" rel="noopener noreferrer" id='website-button-botom' className='btn primary-button px-3 fw-500'>Explore Website</a>
							
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
												<p className='mb-0 text-basic fw-500'>Write a Twitter Thread around Freelancing, Writing, Marketing, Product Management, and Video Editor, by mentioning Signup to Fueler as a Call to action</p>
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
							<div className="card card-green px-3">
								<div className="card-body">
									<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center">
										<div className='d-flex justify-content-start flex-wrap align-items-center'>
											<div className='card-icon my-3 mr-2'>
												<img src="https://res.cloudinary.com/kiwismedia/image/upload/v1641149685/fueler-emoji/ftojrqu17nf5cjkm6ypb.png" alt="" />
											</div>
											<div className='card-content'>
												<p className='mb-0 text-basic fw-500'>Convert existing Twitter threads posted on <a href='https://twitter.com/fuelerhq'>Fueler</a> handle to the <a href='https://fueler.io/blog'>Fueler blog</a></p>
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
												<p className='mb-0 text-basic fw-500'>Shoot an Instagram Reel video about the “Best Website to search for project ideas (mention <a href='https://fueler.io/proof-of-work-ideas'>https://fueler.io/proof-of-work-ideas</a>)”</p>
											</div>
										</div>
										<div className='card-tag'>
											<div className='card-tag-button px-3 py-2'>
												Video Creating
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
												<p className='mb-0 text-basic fw-500'>Shoot a YouTube video on “How to create a portfolio using Fueler?”</p>
											</div>
										</div>
										<div className='card-tag'>
											<div className='card-tag-button px-3 py-2'>
												Video Creating
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
													Shoot a YouTube video on “How to create a customized portfolio using Fueler? (Mention Fueler Bucket)”
												</p>
											</div>
										</div>
										<div className='card-tag'>
											<div className='card-tag-button px-3 py-2'>
												Video Creating
											</div>
										</div>
									</div>
								</div>
							</div>

						</div>


						{/* POW IDea 1 */}
						<div className="col-md-11 mb-4 pb-2">
							<div className="card card-pink px-3">
								<div className="card-body">
									<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center">
										<div className='d-flex justify-content-start flex-wrap align-items-center'>
											<div className='card-icon my-3 mr-2'>
												<img src="https://res.cloudinary.com/kiwismedia/image/upload/v1641149894/fueler-emoji/cvvhxbsssxjqy26ctcfe.png" alt="" />
											</div>
											<div className='card-content'>
												<p className='mb-0 text-basic fw-500'>
													Shoot a YouTube video on “How to create a customized portfolio using Fueler? (Mention Fueler Bucket)”
												</p>
											</div>
										</div>
										<div className='card-tag'>
											<div className='card-tag-button px-3 py-2'>
												Video Creating
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
												<img src="https://res.cloudinary.com/kiwismedia/image/upload/v1641149894/fueler-emoji/cvvhxbsssxjqy26ctcfe.png" alt="" />
											</div>
											<div className='card-content'>
												<p className='mb-0 text-basic fw-500'>
													Write a blog on “How to create a portfolio as a beginner freelancer?” 
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



						{/* POW IDea 1 */}
						<div className="col-md-11 mb-4 pb-2">
							<div className="card card-teal px-3">
								<div className="card-body">
									<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center">
										<div className='d-flex justify-content-start flex-wrap align-items-center'>
											<div className='card-icon my-3 mr-2'>
												<img src="https://res.cloudinary.com/kiwismedia/image/upload/v1641149894/fueler-emoji/cvvhxbsssxjqy26ctcfe.png" alt="" />
											</div>
											<div className='card-content'>
												<p className='mb-0 text-basic fw-500'>
													Write a blog on “10 Best Free Portfolio Websites for Creating an Impressive Portfolio (Mention <a href="http://fueler.io/">Fueler.io</a> in 1st)”
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



						{/* POW IDea 1 */}
						<div className="col-md-11 mb-4 pb-2">
							<div className="card card-peach px-3">
								<div className="card-body">
									<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center">
										<div className='d-flex justify-content-start flex-wrap align-items-center'>
											<div className='card-icon my-3 mr-2'>
												<img src="https://res.cloudinary.com/kiwismedia/image/upload/v1641149894/fueler-emoji/cvvhxbsssxjqy26ctcfe.png" alt="" />
											</div>
											<div className='card-content'>
												<p className='mb-0 text-basic fw-500'>
													Write a blog on “10 Portfolio Websites to create Copywriting portfolio for free (Mention <a href="http://fueler.io/">Fueler.io</a> in 1st)”
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
													Write a comparison blog on “Fueler Vs. Wix: Which is the better for creating a portfolio?” 
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


						{/* POW IDea 1 */}
						<div className="col-md-11 mb-4 pb-2">
							<div className="card card-pink px-3">
								<div className="card-body">
									<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center">
										<div className='d-flex justify-content-start flex-wrap align-items-center'>
											<div className='card-icon my-3 mr-2'>
												<img src="https://res.cloudinary.com/kiwismedia/image/upload/v1641149894/fueler-emoji/cvvhxbsssxjqy26ctcfe.png" alt="" />
											</div>
											<div className='card-content'>
												<p className='mb-0 text-basic fw-500'>
													Write a comparison blog on “Fueler Vs. Wix: Which is the better for creating a portfolio?” 
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



						{/* POW IDea 1 */}
						<div className="col-md-11 mb-4 pb-2">
							<div className="card card-green px-3">
								<div className="card-body">
									<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center">
										<div className='d-flex justify-content-start flex-wrap align-items-center'>
											<div className='card-icon my-3 mr-2'>
												<img src="https://res.cloudinary.com/kiwismedia/image/upload/v1641149894/fueler-emoji/cvvhxbsssxjqy26ctcfe.png" alt="" />
											</div>
											<div className='card-content'>
												<p className='mb-0 text-basic fw-500'>
													Create a YouTube video about “How to use Fueler as a freelance writer?”
												</p>
											</div>
										</div>
										<div className='card-tag'>
											<div className='card-tag-button px-3 py-2'>
												Video Creating
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
												<img src="https://res.cloudinary.com/kiwismedia/image/upload/v1641149894/fueler-emoji/cvvhxbsssxjqy26ctcfe.png" alt="" />
											</div>
											<div className='card-content'>
												<p className='mb-0 text-basic fw-500'>
													Design an Instagram carousel by explaining “7 Ways to use Fueler portfolio link to get the opportunity” 
												</p>
											</div>
										</div>
										<div className='card-tag'>
											<div className='card-tag-button px-3 py-2'>
												Design
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
												<img src="https://res.cloudinary.com/kiwismedia/image/upload/v1641149894/fueler-emoji/cvvhxbsssxjqy26ctcfe.png" alt="" />
											</div>
											<div className='card-content'>
												<p className='mb-0 text-basic fw-500'>
													Write a blog on “5 ways to get 1000 seconds of kudos on Fueler” 
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
													Organize a webinar/workshop for your college campus about Fueler and Tweet about it with pictures 
												</p>
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
							<div className="card card-pink px-3">
								<div className="card-body">
									<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center">
										<div className='d-flex justify-content-start flex-wrap align-items-center'>
											<div className='card-icon my-3 mr-2'>
												<img src="https://res.cloudinary.com/kiwismedia/image/upload/v1641149894/fueler-emoji/cvvhxbsssxjqy26ctcfe.png" alt="" />
											</div>
											<div className='card-content'>
												<p className='mb-0 text-basic fw-500'>
													Write a LinkedIn post about Fueler and how someone can use it 
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
						{/* POW IDea 1 */}
						<div className="col-md-11 mb-4 pb-2">
							<div className="card card-green px-3">
								<div className="card-body">
									<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center">
										<div className='d-flex justify-content-start flex-wrap align-items-center'>
											<div className='card-icon my-3 mr-2'>
												<img src="https://res.cloudinary.com/kiwismedia/image/upload/v1641149894/fueler-emoji/cvvhxbsssxjqy26ctcfe.png" alt="" />
											</div>
											<div className='card-content'>
												<p className='mb-0 text-basic fw-500'>
													Design an infographic explaining “How to use Fueler as a freelancer with steps by steps guide?”
												</p>
											</div>
										</div>
										<div className='card-tag'>
											<div className='card-tag-button px-3 py-2'>
												Design
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
				<div className=' container-fluid my-5 '>
					<div className="row">
						<div className="col-md-12 text-center">
							<a className='cta' href="https://fueler.io">
								<img src={cta} className="mw-100" alt="" />
							</a>
							<a className='mobile-cta' href="https://fueler.io">
								<img src={mobile_cta} className="mw-100" alt="" />
							</a>
						</div>
					</div>
				</div>


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
