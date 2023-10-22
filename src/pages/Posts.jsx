import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Posts() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
			setPosts(res.data);
			console.log(res.data);
		});
	}, []);

	return (
		<>
			{posts.length > 0 ? (
				<>
					<div className="max-w-3xl mx-auto m-4">
						Total Posts: {posts.length}
					</div>
					{posts.map((post) => {
						return (
							<Link to={`/posts/${post.id}`} key={post.id}>
								<div className="bg-white max-w-3xl p-4 mb-6 shadow-md rounded-md mx-auto hover:bg-blue-500 hover:text-white">
									<h1 className="font-bold text-xl color-black">
										{post.title}
									</h1>
									<p className="text-base mt-2">
										{post.body}
									</p>
									<div className="text-xs mt-4">
										UserID: {post.userId}
									</div>
								</div>
							</Link>
						);
					})}
				</>
			) : (
				<p>Loading...</p>
			)}
		</>
	);
}

export default Posts;
