import React from 'react';
import { BulletList } from './ContentLoader';

const BulletLoader = () => {
	return (
		<tfoot>
			<tr>
				<td colSpan="4">
					<BulletList width="650" />
				</td>
			</tr>
		</tfoot>
	);
};

export default BulletLoader;
