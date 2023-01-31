import { AlbumTrackSingle } from '@/features/album/types';
import { getTimeFromMs } from '@/utils';
import { Link } from 'react-router-dom';

interface PlaylistTrackProps {
	tracks: AlbumTrackSingle[];
}

export const AlbumTrack = ({ tracks }: PlaylistTrackProps) => {
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
						<th className='p-2 text-left text-sm font-light uppercase text-light'></th>
					</tr>
				</thead>

				<tbody>
					{tracks.map((track, key) => (
						<tr className='cursor-pointer hover:bg-light/10'>
							<td className='p-2 text-center text-light'>{key + 1}</td>
							<td className='p-2'>
								<p className='text-base text-white'>{track.name}</p>

								<Link
									key={key}
									to={`/artist/${track.artists[0].id}`}
									className='hover-primary text-base text-light hover:underline'
								>
									{track.artists[0].name}
								</Link>
							</td>
							<td className='p-2 text-sm text-light'>
								{getTimeFromMs(track.duration_ms)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
