<style>
	.bg-primary {
		background: #0001FA !important;
	}
</style>
<style>
	.bg-danger {
		background: #FE0002 !important;
	}
</style>
<style>
	.bg-warning {
		background: #FEC409 !important;
	}
</style>
<div class="content-wrapper">
	<div class="content-header">
		<div class="container-fluid">
			<div class="row mb-0">
				<div class="col-md-12">
					<div class="m-0 text-dark text-center text-lg">
						<i class="fas fa-receipt"></i>&nbsp;&nbsp;Compra
					</div>
				</div>
			</div>

		</div>
	</div>
	<div class="content">
		<div class="container-fluid">
			<div style="max-width: 1140px; margin: 0 auto;">
				<div class="row mb-3">
					<div class="col-md-6">
						<div class="row">
							<div class="col-md-8 float-right">
								<select class="select2 form-control" name="orden_listado" required></select>
							</div>
							<div class="col-md-4 float-left">
								<button type="button" id="btn-select-orden"
									class="btn btn-primary bg-primary">Seleccionar</button>
							</div>
						</div>
					</div>
					<div id="col-btn-nuevacompra" class="col-md-6">
						<button type="button" id="btn-nuevacompra" class="btn btn-primary btn-block bg-primary"><i
								class="fa fa-plus fa-1x"></i>&nbsp;&nbsp;<font>Nueva Compra</font></button>
					</div>
				</div>
				<form id="FRM_INSERT_DETA_ORDCOMPRA" method="post"
					action="<?php echo $functions->direct_sistema(); ?>/modules/compras/insert-update-compra.php"
					enctype="multipart/form-data">
					<input type="hidden" name="orden_id">
					<div class="card card-primary">
						<div class="card-header bg-primary">
							<div class="row">
								<div class="col-md-3">
									<div class="card-title">Datos de Compra</div>
								</div>
								<div class="col-md-9">
									<div class="row">
										<div class="col-md-8"></div>
										<div class="col-md-4">
											<div class="row">
												<div class="col-md-5 text-right">
													<label>Estado:</label>
												</div>
												<div class="col-md-7">
													<select class="form-control" name="orden_estado">
														<option value="Aprobado">Aprobada</option>
														<option value="Anulado">Anulada</option>
														<option value="Pendiente" selected>Pendiente</option>
													</select>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="card-body pt-3">
							<div class="row">
								<!--
								<div class="col-md-3">
									<div class="row">
										
										<div class="col-md-5 text-right">

											<label>TC Venta:</label>
										</div>
										<div class="col-md-7">
											<div class="input-group">
												<div class="input-group-prepend">
													<span class="input-group-text">
														<i class="fas fa-dollar-sign"></i>
													</span>
												</div>
												<input type="number" step="0.01" min="0" class="form-control" placeholder="Venta" name="orden_tcventa">

											</div>
										</div>
	
									</div>
								</div>
								-->
								<input type="hidden" step="0.01" min="0" class="form-control" placeholder="Venta"
									name="orden_tcventa" value="0">
								<!--
								<div class="col-md-3">
									<div class="row">
										
										<div class="col-md-5 text-right">
											<label>TC Compra:</label>
										</div>
										<div class="col-md-7">
											<div class="input-group">
												<div class="input-group-prepend">
													<span class="input-group-text">
														<i class="fas fa-dollar-sign"></i>
													</span>
												</div>
												<input type="number" step="0.01" min="0" class="form-control" placeholder="Compra" name="orden_tccompra">
											</div>

										</div> 
									</div>
								</div>-->
								<input type="hidden" step="0.01" min="0" class="form-control" placeholder="Compra"
									name="orden_tccompra" value="0">

								<div class="col-md-4">
									<div class="form-group">
										<label>N° Compra</label>
										<div class="input-group mb-3">
											<input type="text" name="orden_nro" class="form-control"
												placeholder="Número de documento de compra" value="" required>
										</div>
									</div>
								</div>

								<div class="col-md-4">
									<div class="form-group">
										<label>Fecha de Emisión</label>
										<div class="input-group mb-3">
											<div class="input-group-prepend">
												<span class="input-group-text">
													<i class="far fa-calendar-alt"></i>
												</span>
											</div>
											<input type="date" name="orden_fecemision" class="form-control"
												value="<?php echo date('Y-m-d'); ?>" required>
										</div>
									</div>
								</div>
							</div>

							<div class="row">

								<!--
								<div class="col-md-4">
									<div class="form-group">
										<label>Fecha de Entrega</label>
										<div class="input-group mb-3">
											<div class="input-group-prepend">
												<span class="input-group-text">
													<i class="far fa-calendar-alt"></i>
												</span>
											</div>
											<input type="date" name="orden_fecentrega" class="form-control" value="<?php echo date('Y-m-d'); ?>" required>
										</div>
									</div>
								</div>--> 
								<input type="hidden" name="orden_fecentrega" class="form-control" value="<?php echo date('Y-m-d'); ?>">

								<div class="col-md-4">
									<div class="form-group">
										<!--
										<label>Tipo de Moneda</label>
										<div class="input-group mb-3">
											<div class="input-group-prepend">
												<span class="input-group-text">
													<i class="fas fa-coins"></i>
												</span>
											</div>
											<select name="orden_tipomoneda" class="form-control" required>
											<option value="">Seleccione</option>
											<option value="MN" selected>Moneda Nacional</option>
											<option value="ME">Moneda Extranjera</option>
										</select>
										</div>--> 				
										<input type="hidden" name="orden_tipomoneda" value="MN">
									</div>
								</div>
								<!--	
								<div class="col-md-3">
									<div class="form-group">
										<label>N° Cotización</label>
										<div class="input-group mb-3">
											<div class="input-group-prepend">
												<span class="input-group-text">
													<i class="fas fa-file-invoice-dollar"></i>
												</span>
											</div>
											<input type="text" name="orden_cotizacion" class="form-control" placeholder="Número Cotización">
										</div>
									</div>
								</div>
								-->
							</div>
							<div class="row">
								<div class="col-md-2">
									<div class="form-group">
										<label>Forma de Pago</label>
										<select name="orden_tipopagotext" class="form-control select2" required>
											<option value="">Seleccione</option>
											<option value="0">Contado</option>
											<option value="15">15 días</option>
											<option value="30">30 días</option>
											<option value="45">45 días</option>
											<option value="60">60 días</option>
											<option value="Otro">Específicar</option>
										</select>
									</div>
								</div>
								<div class="col-md-0">
									<div class="form-group" id="div_diaspago">
										<label></label>
										<div class="input-group mb-3">
											<div class="">
												<span class="com">
												
												</span>
											</div>
											<input type="hidden" min="0" max="365" step="1" class="form-control"
												value="" placeholder="Núm. de días" name="orden_tipopago">
										</div>
									</div>
								</div>
								<div class="col-md-4">
									<div class="form-group">
										<label>Solicitado por</label>
										<div class="input-group mb-3">
											<div class="input-group-prepend">
												<span class="input-group-text">
													<i class="fas fa-user-tie"></i>
												</span>
											</div>
											<input type="text" class="form-control" name="orden_solicitante"
												placeholder="Nombre de solicitante" required>
										</div>
									</div>
								</div>
								<div class="col-md-4">
									<div class="form-group">
										<label>Autorizado por</label>
										<div class="input-group mb-3">
											<div class="input-group-prepend">
												<span class="input-group-text">
													<i class="fas fa-user-check"></i>
												</span>
											</div>
											<input type="text" name="orden_autorizador" class="form-control"
												placeholder="Nombre de quien autoriza" required>
										</div>
									</div>
								</div>
								<div class="col-md-12">
									<div class="form-group">
										<label>Observaciones</label>
										<input type="text" class="form-control" name="orden_observ"
											placeholder="Observaciones de la orden">
									</div>
								</div>

							</div>
						</div>
					</div>

					<div class="card card-info">
						<div class="card-header bg-warning">
							<div class="card-title"><i class="fas fa-people-carry"></i>&nbsp;&nbsp;Datos del Proveedor
							</div>
						</div>
						<div class="card-body">
							<div class="row">
								<div class="col-md-4">
									<div class="form-group">
										<label>Proveedor</label>
										<select name="orden_proveedor" class="form-control select2" required></select>
									</div>
								</div>
								<div class="col-md-4">
									<div class="form-group">
										<label>N° Proveedor</label>
										<input type="text" class="form-control" name="orden_provruc" value=""
											placeholder="Seleccione un proveedor" readonly>
									</div>
								</div>
								<div class="col-md-4">
									<div class="form-group">
										<!--<label>N° Cuenta</label>
										<input type="text" name="orden_nrocuenta" placeholder="Número de cuenta" class="form-control">-->
										<input type="hidden" name="orden_nrocuenta" placeholder="Número de cuenta"
											class="form-control" value="">
									</div>
								</div>
								<input type="hidden" name="orden_nomprov">
							</div>
						</div>
					</div>

					<div class="row">
						<div class="col-sm-12">
							<div class="card card-danger">
								<div class="card-header bg-danger">
									<div class="card-title"><i class="fas fa-box"></i>&nbsp;&nbsp;Datos del Artículo
									</div>
								</div>
								<div class="card-body">
									<div class="row">
										<div class="col-md-4">
											<div class="form-group">
												<label>Código</label>
												<input type="text" name="orden_codprod" placeholder="Código de producto"
													class="form-control">
											</div>
										</div>
										<div class="col-md-8">
											<div class="form-group">
												<label>Descripción</label>
												<input type="text" name="orden_descprod"
													placeholder="Descripción de producto" class="form-control">
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-md-12">
											<div class="form-group">
												<input type="hidden" name="orden_glosa" placeholder="Glosa"
													class="form-control" value="">
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-md-2">
											<div class="form-group">
												<label>Precio Unitario</label>
												<input type="text" name="orden_precunit" class="form-control"
													placeholder="Precio unidad">
											</div>
										</div>
										<div class="col-md-2">
											<div class="form-group">
												<label>Cantidad</label>
												<input type="number" min="0" name="orden_cantidad" class="form-control"
													placeholder="Cantidad">
											</div>
										</div>
										<div class="col-md-2">
											<div class="form-group">
												<label>% Dscto.</label>
												<input type="number" value="0" min="0" step="0.1" name="orden_porcdscto"
													class="form-control" placeholder="Porcentaje de descuento">
											</div>
										</div>
										<div class="col-md-2">
											<div class="form-group">
												<label>Valor Total c/Dscto.</label>
												<input type="text" name="orden_valordscto" value="0"
													class="form-control" readonly>
											</div>
										</div>
										<div class="col-md-2">
											<div class="form-group">
												<label>Valor ISV</label>
												<input type="text" name="orden_valorigv" value="0" class="form-control"
													readonly>
											</div>
										</div>
										<div class="col-md-2">
											<div class="form-group">
												<label>Valor de Medida</label>
												<select class="form-control select2" name="orden_valunit">
													<option value="">Seleccione</option>
													<option value="gr">gr (Gramos)</option>
													<option value="mg">mg (Miligramos)</option>
													<option value="lt">lt (Litros)</option>
													<option value="ml">ml (Mililitros)</option>
													<option value="gl">gl (Galones)</option>
													<option value="und">und (Unidad)</option>
												</select>
											</div>
										</div>
										<input type="hidden" name="orden_nameprod">
										<input type="hidden" name="orden_stockprod">
									</div>
									<div class="mt-3">
										<button id="btn-add-prodtporden" class="btn btn-primary btn-block bg-primary"><i
												class="fa fa-plus fa-1x"></i> Añadir Artículo</button>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="card">
						<div class="card-body">
							<div class="row">
								<div>
									<label>Haga doble clic sobre un ítem para eliminarlo del detalle</label>
								</div>
							</div>
							<div class="row">
								<div class="table-responsive">
									<table id="table-ord-compras" class="table table-bordered table-hover">
										<thead>
											<tr>
												<th>Nro.</th>
												<th>Código</th>
												<th>Descripción</th>
												<th>Valor Unidad</th>
												<th>Precio Unitario</th>
												<th>Cantidad</th>
												<th>% Dscto.</th>
												<th>Valor Dscto.</th>
											</tr>
										</thead>
										<tbody></tbody>
									</table>
								</div>
							</div>
							<div class="row mt-3">
								<div class="col-md-4"></div>
								<div class="col-md-4"></div>
								<div class="col-md-4">
									<div class="row">
										<div class="col-md-5 text-right">
											<label>Total Compra</label>
										</div>
										<div class="col-md-7">
											<input type="text" name="orden_totcompra" class="form-control" readonly>
										</div>
									</div>
									<div class="row mt-2">
										<div class="col-md-5 text-right">
											<label>ISV</label>
										</div>
										<div class="col-md-7">
											<input type="text" name="orden_igv" class="form-control" readonly>
										</div>
									</div>
									<div class="row mt-2">
										<div class="col-md-5 text-right">
											<label>Total Neto</label>
										</div>
										<div class="col-md-7">
											<input type="text" name="orden_totneto" class="form-control" readonly>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row mt-3 mb-3">
						<div id="col-btn-save-orden" class="col-md-12">
							<button type="submit" id="btn-save-orden" class="btn btn-success btn-block"><i
									class="fa fa-save fa-1x"></i>&nbsp;&nbsp;<font>Registrar Compra</font></button>
						</div>
						<div id="col-btn-delete-orden" class="col-md-6">
							<button type="button" id="btn-delete-orden" class="btn btn-danger btn-block"><i
									class="fa fa-trash fa-1x"></i>&nbsp;&nbsp;<font>Eliminar Compra</font></button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>