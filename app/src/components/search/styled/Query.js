import styled from "styled-components";

export const Query = styled.div`
	.input_group {
		.input {
		}
		.select {
			display: inline-block;
			background: white;
			* {
				color: black;
			}
			.select_value {
				.icon-dropdown {
				}
			}
			.select_options {
				display: none;
				position: absolute;
				background: lightblue;
				&.opened {
					display: block;
				}
				.select_option {
				}
			}
		}
	}
`;
