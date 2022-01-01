import React from 'react';
import { useSelector } from 'react-redux';
import Icon from '../../components/Icon';

function UserProfile() {
	const user = useSelector((state) => state.user);

	return (
		<div className="devfinder__content">
			<div className="user">
				<div className="user__avatar">
					<img src={user.avatar_url ? user.avatar_url : 'https://bit.ly/3FFDbKF'} alt="Avatar" />
				</div>
				<div className="user__details">
					<div className="user__top">
						<span className="user__fullname">{user.name}</span>
						<span className="user__joined">Joined {user.joined}</span>
					</div>
					<span className="user__name">@{user.login}</span>
					<span className="user__bio">{user.bio ? user.bio : 'This profile has no bio'}</span>
					<div className="profile-data">
						<div className="profile-data__item">
							<span className="profile-data__key">Repos</span>
							<span className="profile-data__val">{user.public_repos}</span>
						</div>
						<div className="profile-data__item">
							<span className="profile-data__key">Followers</span>
							<span className="profile-data__val">{user.followers}</span>
						</div>
						<div className="profile-data__item">
							<span className="profile-data__key">Following</span>
							<span className="profile-data__val">{user.following}</span>
						</div>
					</div>
					<div className="user__about">
						<div className="user__info">
							<Icon name="location" width="20" height="20" color="#383838" />
							<span>{user.location ? user.location : 'Not available'}</span>
						</div>
						<div className="user__info">
							<Icon name="twitter" width="20" height="20" color="#383838" />
							{user.twitter_username ? <a href={user.twitter_link}>@{user.twitter_username}</a> : <span>Not available</span>}
						</div>
						<div className="user__info">
							<Icon name="link" width="18" height="18" color="#383838" />
							{user.blog ? <a href={user.blog}>Blog</a> : <span>Not available</span>}
						</div>
						<div className="user__info">
							<Icon name="organization" width="20" height="20" color="#383838" />
							<span>{user.company ? '@' + user.company : 'Not available'}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UserProfile;
