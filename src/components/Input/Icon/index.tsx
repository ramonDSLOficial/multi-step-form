import React from 'react';

import { IconField } from './styles';
import { useInputContext } from '../InputContext';

interface IconProps {
	source?: string | React.ElementType;
	alt?: string;
}

const Icon: React.FC<IconProps> = ({ source: Source, alt, ...props }) => {
	const { $type } = useInputContext();

	return (
		<IconField $type={$type}>
			{typeof Source === 'string' ? (
				<img src={Source} alt={alt} {...props} />
			) : Source ? (
				<Source {...props} />
			) : null}
		</IconField>
	);
};

export default Icon;
