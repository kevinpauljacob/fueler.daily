import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface DiscoverCardProps {
	discover: DiscoverPost;
}

const DiscoverCard: React.FC<DiscoverCardProps> = ({ discover }) => {
	return (
		<Link href={discover.link} target='_blank' className='m-5'>
			<div className='w-full'>
				<Image
					alt={discover.title}
					unoptimized={true}
					src={discover.cover}
					width={50}
					height={50}
					className='rounded-lg w-full max-h-[200px] min-w-[300px] object-cover'
				/>
			</div>
			<h4 className='text-xl font-semibold py-2'>{discover.title}</h4>
			<div className='flex gap-4 items-center'>
				<span className='w-8 h-8 overflow-hidden rounded-full'>
					<Image
						alt={discover.title}
						unoptimized={true}
						src={discover.user.img}
						width={50}
						height={50}
						className='w-full h-auto object-cover'
					/>
				</span>
				<span>{discover.user.name}</span>
			</div>
		</Link>
	);
};

export default DiscoverCard;
