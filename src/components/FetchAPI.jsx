import { useEffect, useState } from 'react';
import getPosts from '../helpers/getPosts';
import getUser from '../helpers/getUser';

const FetchAPI = () => {
	const [user, setUser] = useState({});
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		updateUser();
	}, []);
	const updateUser = () => {
		getUser().then(newUser => {
			setUser(newUser);
		});
	};
	const updatePost = () => {
		getPosts(user.id).then(newPosts => {
			setPosts(newPosts);
		});
	};
	useEffect(() => {
		if (user?.id) updatePost();
	}, [user]);
	return (
		<div>
			<button onClick={updateUser}>otro user</button>
			<h4>{user.name}</h4>
			<ul>
				{posts.map(item => (
					<li key={item.id}>{item.title}</li>
				))}
			</ul>
		</div>
	);
};

export default FetchAPI;
