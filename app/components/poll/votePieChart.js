import React from 'react';
import {scaleOrdinal} from 'd3-scale';
import {pie, arc} from 'd3-shape';
import {select} from 'd3-selection';
import {nest} from 'd3-collection';

export default class VotePieChart extends React.Component {
    constructor(props){
		const radius = Math.min(props.width, props.height) / 2;
        super(props);
		this.state = {
			poll: {
				votes: props.poll.votes || [],
				options: props.poll.votes || []
			},
			color: scaleOrdinal(),
		};
		this.pie = pie().sort(null).value((d) => { return d.total; });
		this.arc = arc().outerRadius(radius - 10).innerRadius(0);
		this.label = arc().outerRadius(radius - 40).innerRadius(radius - 40);
    }

	componentDidMount(){
		this.svg = select(this.refs.svgcontainer)
			.append('svg')
			.attr('width', this.props.width)
			.attr('height', this.props.height)
			.append('g')
			.attr('transform','translate(' + this.props.width / 2 + ',' + this.props.height / 2 + ')');
	}

	componentWillReceiveProps(props) {
		this.setState(() => {
			return {
				poll: props.poll,
				color: this.generateColors(props.poll.options)
			}
		});
	}

	randomColor() {
		const options = '0123456789abcdef';
		let color = "#";
		let i = 0;
		
		for (i; i < 6; i++) {
			color += options.charAt(Math.floor(Math.random() * (options.length)));
		}

		return color;
	}

	generateColors(options) {
		let colors = this.state.color.range() || [];

		for (let i = colors.length; i < options.length; i++) {
			colors.push(this.randomColor());
		}

		return scaleOrdinal(colors)
	}

	renderSVG() {
		const votes = this.state.poll.votes;
		const options = this.state.poll.options;
		const data = votes.map((str) => { return Number(str); }).reduce((acc, num) => { 
			const findFunc = (value) => { return value.name === num; };
			const existingObj = acc.find(findFunc);
			const existingIndex = acc.findIndex(findFunc);

			if (existingObj) {
				acc[existingIndex].total += 1;
				return acc;
			} else {
				return acc.concat([
					{
						'name': num,
						'total': 1
					}
				]);
			}
		 }, []);
		const chart = this.svg.datum(data)
			.selectAll('.arc')
			.data(this.pie)
			.enter();
		
		chart.append('path')
			.attr('d', this.arc)
			.attr('fill', (d) => { return this.state.color(d.data.name); });
	}

	getColorLegend() {
		const domain = this.state.color.domain();
		const legends = this.state.color.range().map((color, i) => 
			<div className='legend-item' key={'legend-' + i}>
				<div className='legend-color' style={{backgroundColor: color}}></div>
				<div className='legend-name'>{this.state.poll.options[domain[i]]}</div>
			</div>
		);

		return (
			<div className='legend-container'>{legends}</div>
		)
	}
    
	render() {
		if (this.svg && this.state.color && this.state.poll) {
			this.renderSVG();
		}
		
		return (
			<div>
				<div>{!this.state.poll.votes.length ? 'No votes yet' : ''}</div>
				<div ref='svgcontainer'></div>
				{this.getColorLegend()}
			</div>
		);
	}
}