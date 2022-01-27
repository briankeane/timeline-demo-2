import "./Specs.scss";

const Specs = () => {
	return (
		<div class="spec-container">
			<div class="gibson-card py-4">
				<div class="gibson-diamond"></div>
			</div>
			<h3 class="text-left">Specifications</h3>
			<div class="row">
				<div class="col-12 col-sm-6 col-md-3 text-center"></div>
				<div class="col-12 col-sm-6 col-md-9">
					<div class="spec-section">
						<h4>Body</h4>

						<div class="spec-item d-flex justify-content-between">
							<div>Body Shape</div>
							<div>Les Paul</div>
						</div>

						<div class="spec-item d-flex justify-content-between">
							<div>Body Material</div>
							<div>Mahogany</div>
						</div>

						<div class="spec-item d-flex justify-content-between">
							<div>Top</div>
							<div>Maple</div>
						</div>

						<div class="spec-item d-flex justify-content-between">
							<div>Weight Relief</div>
							<div>None</div>
						</div>

						<div class="spec-item d-flex justify-content-between">
							<div>Finish</div>
							<div>Gloss Nitrocellulose Lacquer</div>
						</div>
					</div>
					<div class="spec-section">
						<h4>Neck</h4>

						<div class="spec-item d-flex justify-content-between">
							<div>Material</div>
							<div>Mahogany</div>
						</div>

						<div class="spec-item d-flex justify-content-between">
							<div>Profile</div>
							<div>Vintage 50s</div>
						</div>

						<div class="spec-item d-flex justify-content-between">
							<div>Scale Length</div>
							<div>24.75" / 628.65mm</div>
						</div>

						<div class="spec-item d-flex justify-content-between">
							<div>Fingerboard Material</div>
							<div>Rosewood</div>
						</div>

						<div class="spec-item d-flex justify-content-between">
							<div>Fingerboard Radius</div>
							<div>12"</div>
						</div>

						<div class="spec-item d-flex justify-content-between">
							<div>Number Of Frets</div>
							<div>22</div>
						</div>

						<div class="spec-item d-flex justify-content-between">
							<div>Frets</div>
							<div>Medium Jumbo</div>
						</div>
					</div>
					<div class="spec-section">
						<h4>Hardware</h4>

						<div class="spec-item d-flex justify-content-between">
							<div>Accessories</div>
							<div>Includes Gibson Accessory Kit</div>
						</div>
					</div>
					{/* <div id="disclaimer" class="spec-section">
						<p>
							<small>
								<i>
									In order to continually improve the design, quality and
									performance of our products and instruments and to make use of
									the best materials at all times, Gibson reserves the right to
									change specifications without notice.
								</i>
							</small>
						</p>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default Specs;
