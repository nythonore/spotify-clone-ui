import { Track } from '@/features/playlist/types';
import { getTimeFromMs } from '@/utils';
import { humanDate } from '@/utils/humanDate';
import { Link } from 'react-router-dom';

interface PlaylistTrackProps {
	tracks: Track[];
}

export const PlaylistTrack = ({ tracks }: PlaylistTrackProps) => {
	return (
		<div className='w-full overflow-auto'>
			<table className='w-full overflow-hidden whitespace-nowrap'>
				<thead>
					<tr>
						<th className='p-2 text-center text-sm font-light uppercase text-light'>
							#
						</th>
						<th className='p-2 text-left text-sm font-light uppercase text-light'>
							Title
						</th>
						<th className='p-2 text-left text-sm font-light uppercase text-light'>
							Album
						</th>
						<th className='p-2 text-left text-sm font-light uppercase text-light'>
							Date added
						</th>
						<th className='p-2 text-left text-sm font-light uppercase text-light'></th>
					</tr>
				</thead>

				<tbody>
					{tracks.map((track, key) => (
						<tr className='cursor-pointer hover:bg-light/10'>
							<td className='p-2 text-center text-light'>{key + 1}</td>
							<td className='p-2'>
								<div className='flex gap-4'>
									<img
										alt={track.track.name}
										src={track.track.album.images[0].url}
										className='h-10 w-10'
									/>

									<div>
										<p className='text-base text-white'>{track.track.name}</p>

										<div className='space-x-2'>
											{track.track.artists.map((artist, key) => (
												<Link
													key={key}
													to={`/artist/${artist.id}`}
													className='hover-primary text-base text-light hover:underline'
												>
													{artist.name}
												</Link>
											))}
										</div>
									</div>
								</div>
							</td>
							<td className='p-2 text-sm text-light'>
								<Link
									to={`/album/${track.track.album.id}`}
									className='hover-primary hover:underline'
								>
									{track.track.album.name}
								</Link>
							</td>
							<td className='p-2 text-sm text-light'>
								{humanDate(track.added_at)}
							</td>
							<td className='p-2 text-sm text-light'>
								{getTimeFromMs(track.track.duration_ms)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
