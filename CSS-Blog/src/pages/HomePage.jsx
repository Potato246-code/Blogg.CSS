import React from "react"
import BlogSnippet from "../components/BlogSnippet"

const HomePage = ({ posts }) => {
	
	let snippets = posts.map((post) => <BlogSnippet {...post} />)

	return (
		<section id="home" className="section">
			<div className="is-flex is-justify-content-space-between py-2">

				<h1 className="title">Latest Post</h1>

				<div>
					<p>Welcome Isaiah</p>
					<input type="text" className="input" placeholder="Search" />
				</div>
			</div>

			{snippets}

		</section>
	)
}



export default HomePage
