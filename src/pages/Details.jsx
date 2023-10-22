import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Details() {
	const [post, setPost] = useState(null);
	const [comments, setComments] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then((res) => {
				setPost(res.data);
			})
			.catch((err) => {
				alert(err);
			});

		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
			.then((res) => {
				setComments(res.data);
			});
	}, [id]);

	return (
		<div className="max-w-3xl mx-auto p-4">
			<Link
				to="/"
				className="p-2 border border-blue-500 rounded hover:bg-blue-500"
			>
				Back
			</Link>
			{post ? (
				<>
					<div className="mt-4 shadow-md rounded-md p-4">
						<h1 className="text-xl font-bold">{post.title}</h1>
						<p className="mt-2 text-base">{post.body}</p>
						<div className="mt-4 text-xs">
							UserID: {post.userId}
						</div>
					</div>
					<h1 className="mt-6 font-bold text-2xl">Comments</h1>
					{comments.map((comment) => {
						return (
							<div
								key={comment.id}
								className="mt-2 bg-gray-100 rounded-md p-4"
							>
								<h1 className="font-bold text-lg">
									{comment.name}
								</h1>
								<p className="mt-2 text-base">{comment.body}</p>
								<div className="mt-4 text-sm">
									By: {comment.email}
								</div>
							</div>
						);
					})}
				</>
			) : (
				<div className="mt-6 text-center font-bold text-3xl">
					Loading...
				</div>
			)}
		</div>
	);
}
