import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'rsg-components/Markdown';
import Props from 'rsg-components/Props';
import Examples from 'rsg-components/Examples';
import ReactComponentRenderer from 'rsg-components/ReactComponent/ReactComponentRenderer';

export default function ReactComponent({
	component,
	sidebar,
}) {
	const { name, pathLine, examples } = component;
	const { description, props } = component.props;
	return (
		<ReactComponentRenderer
			name={name}
			pathLine={pathLine}
			description={description && <Markdown text={description} />}
			props={props && <Props props={props} />}
			examples={examples && <Examples examples={examples} name={name} />}
			sidebar={sidebar}
		/>
	);
}

ReactComponent.propTypes = {
	component: PropTypes.object.isRequired,
	sidebar: PropTypes.bool,
};
