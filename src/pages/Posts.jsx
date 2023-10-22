import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Posts() {
	const [posts, setPosts] = useState([]);
	const [search, setSearch] = useState("");
	const [filteredPosts, setFilteredPosts] = useState([]);

	useEffect(() => {
		axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
			setPosts(res.data);
		});
	}, []);

	useEffect(() => {
		setFilteredPosts(
			posts.filter((post) => {
				return post.title.toLowerCase().includes(search.toLowerCase());
			})
		);
	}, [search, posts]);

	return (
		<div className="max-w-3xl mx-auto m-4">
			{posts.length > 0 ? (
				<>
					<h1 className="font-bold text-2xl">Search Post</h1>
					<input
						type="text"
						placeholder="Search"
						value={search}
						onChange={(e) => setSearch(e.currentTarget.value)}
						className="w-full bg-gray-100 p-2 rounded-md mt-2"
					/>
					<div className="text-lg font-bold mt-2 mb-4">
						Total Posts: {filteredPosts.length}
					</div>
					{filteredPosts.map((post) => {
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
				<p className="text-3xl font-bold text-center">Loading...</p>
			)}
		</div>
	);
}

export default Posts;
