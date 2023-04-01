import './index.css';
import {
	CommentOutlined,
	EditOutlined,
	WechatOutlined,
	DeleteOutlined,
	CopyOutlined,
} from '@ant-design/icons';
const CommentDrawer = () => {
	return (
		<div className={'data-comment-container'}>
			<div className={'data-comment-toolbar'}>
				<div className={'data-comment-toolbar-content'}>
					<div className={'data-comment-toolbar-text'}>
						划词评论（6）
					</div>

					<div className={'data-comment-toolbar-closeBtn'}>
						<svg
							width="1em"
							height="1em"
							viewBox="0 0 256 256"
							xmlns="http://www.w3.org/2000/svg"
							className="larkui-icon larkui-icon-close icon-svg index-module_closeIcon_BZ+U- index-module_size_wVASz"
							data-name="Close"
						>
							<path
								d="M34.41 34.499c3.906-3.905 10.238-3.905 14.143 0l79.903 79.902 79.903-79.902c3.905-3.905 10.237-3.905 14.142 0 3.905 3.905 3.905 10.237 0 14.142l-79.903 79.903 79.903 79.903c3.834 3.834 3.904 10.008.21 13.927l-.21.215c-3.905 3.906-10.237 3.906-14.142 0l-79.903-79.903-79.903 79.903c-3.905 3.906-10.237 3.906-14.142 0-3.906-3.905-3.906-10.237 0-14.142l79.902-79.903L34.41 48.641c-3.835-3.834-3.904-10.007-.21-13.927Z"
								fill="currentColor"
							></path>
						</svg>
					</div>
				</div>
			</div>

			<div className={'data-comment-list-wrapper'}>
				<div className={'data-comment-group-1'}>
					<div className={'data-comment-group-box'}>
						<div className={'data-comment-group-box-header'}>
							<div
								className={'data-comment-group-box-header-text'}
							>
								3 条评论
							</div>
						</div>

						<div className={'data-comment-group-box-item'}>
							<div className={'data-comment-group-box-avatar'}>
								<img
									loading="lazy"
									data-testid="img-avatar"
									src="https://mdn.alipayobjects.com/huamei_0prmtq/afts/img/A*khrYRYi6VN0AAAAAAAAAAAAADvuFAQ/original"
									className={
										'data-comment-group-box-avatar-img'
									}
									alt="flord"
								/>
							</div>

							<div className={'data-comment-group-box-item-main'}>
								<div>
									<div
										className={
											'data-comment-group-box-item-name'
										}
									>
										<span>tom</span>
									</div>
									<div
										className={
											'data-comment-group-box-item-time'
										}
									>
										<span>昨天 11:54</span>
									</div>
								</div>

								<div
									className={
										'data-comment-group-box-item-content'
									}
								>
									<div
										className={
											'data-comment-group-box-item-doc-content'
										}
									>
										<div>
											<div
												className="ne-viewer ne-simple-ui ne-typography-traditional"
												id="u832d"
											>
												<div className="ne-viewer-header">
													<button
														type="button"
														className="ne-ui-exit-max-view-btn"
													>
														返回文档
													</button>
												</div>
												<div className="ne-viewer-body">
													<div className={'ne-p'}>
														<div
															className={
																'ne-text'
															}
															id="u295b706e"
														>
															233333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
														</div>
														<span className="ne-viewer-b-filler">
															<br />
														</span>
													</div>
												</div>
												<div className="ne-inner-overlay-container"></div>
											</div>
											<div
												className={
													'data-comment-group-box-item-doc-content-zero'
												}
											>
												​
											</div>
										</div>
									</div>
								</div>

								<div
									className={
										'data-comment-group-box-item-action'
									}
								>
									<span
										className={
											'data-comment-group-box-item-action-comment'
										}
									>
										<CommentOutlined />
									</span>
									<span
										className={
											'data-comment-group-box-item-action-comment'
										}
									>
										<WechatOutlined />
									</span>
									<span
										className={
											'data-comment-group-box-item-action-comment'
										}
									>
										<EditOutlined />
									</span>
									<span
										className={
											'data-comment-group-box-item-action-comment'
										}
									>
										<DeleteOutlined />
									</span>
									<span
										className={
											'data-comment-group-box-item-action-comment'
										}
									>
										<CopyOutlined />
									</span>
								</div>
							</div>
						</div>

						<div className={'data-comment-group-box-item'}>
							<div className={'data-comment-group-box-avatar'}>
								<img
									loading="lazy"
									data-testid="img-avatar"
									src="https://mdn.alipayobjects.com/huamei_0prmtq/afts/img/A*khrYRYi6VN0AAAAAAAAAAAAADvuFAQ/original"
									className={
										'data-comment-group-box-avatar-img'
									}
									alt="flord"
								/>
							</div>

							<div className={'data-comment-group-box-item-main'}>
								<div>
									<div
										className={
											'data-comment-group-box-item-name'
										}
									>
										<span>tom</span>
									</div>
									<div
										className={
											'data-comment-group-box-item-time'
										}
									>
										<span>昨天 11:54</span>
									</div>
								</div>

								<div
									className={
										'data-comment-group-box-item-content'
									}
								>
									<div
										className={
											'data-comment-group-box-item-doc-content'
										}
									>
										<div>
											<div
												className="ne-viewer ne-simple-ui ne-typography-traditional"
												id="u832d"
											>
												<div className="ne-viewer-header">
													<button
														type="button"
														className="ne-ui-exit-max-view-btn"
													>
														返回文档
													</button>
												</div>
												<div className="ne-viewer-body">
													<div className={'ne-p'}>
														<div
															className={
																'ne-text'
															}
															id="u295b706e"
														>
															233333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
														</div>
														<span className="ne-viewer-b-filler">
															<br />
														</span>
													</div>
												</div>
												<div className="ne-inner-overlay-container"></div>
											</div>
											<div
												className={
													'data-comment-group-box-item-doc-content-zero'
												}
											>
												​
											</div>
										</div>
									</div>
								</div>

								<div
									className={
										'data-comment-group-box-item-action'
									}
								>
									<span
										className={
											'data-comment-group-box-item-action-comment'
										}
									>
										<CommentOutlined />
									</span>
									<span
										className={
											'data-comment-group-box-item-action-comment'
										}
									>
										<WechatOutlined />
									</span>
									<span
										className={
											'data-comment-group-box-item-action-comment'
										}
									>
										<EditOutlined />
									</span>
									<span
										className={
											'data-comment-group-box-item-action-comment'
										}
									>
										<DeleteOutlined />
									</span>
									<span
										className={
											'data-comment-group-box-item-action-comment'
										}
									>
										<CopyOutlined />
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className={'data-comment-group-2'}>
					<div className={'data-comment-group-box'}>
						<div className={'data-comment-group-box-header'}>
							<div
								className={'data-comment-group-box-header-text'}
							>
								3 条评论
							</div>
						</div>

						<div className={'data-comment-group-box-item'}>
							<div className={'data-comment-group-box-avatar'}>
								<img
									loading="lazy"
									data-testid="img-avatar"
									src="https://mdn.alipayobjects.com/huamei_0prmtq/afts/img/A*khrYRYi6VN0AAAAAAAAAAAAADvuFAQ/original"
									className={
										'data-comment-group-box-avatar-img'
									}
									alt="flord"
								/>
							</div>

							<div className={'data-comment-group-box-item-main'}>
								<div>
									<div
										className={
											'data-comment-group-box-item-name'
										}
									>
										<span>tom</span>
									</div>
									<div
										className={
											'data-comment-group-box-item-time'
										}
									>
										<span>昨天 11:54</span>
									</div>
								</div>

								<div
									className={
										'data-comment-group-box-item-content'
									}
								>
									<div
										className={
											'data-comment-group-box-item-doc-content'
										}
									>
										<div>
											<div
												className="ne-viewer ne-simple-ui ne-typography-traditional"
												id="u832d"
											>
												<div className="ne-viewer-header">
													<button
														type="button"
														className="ne-ui-exit-max-view-btn"
													>
														返回文档
													</button>
												</div>
												<div className="ne-viewer-body">
													<div className={'ne-p'}>
														<div
															className={
																'ne-text'
															}
															id="u295b706e"
														>
															233333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
														</div>
														<span className="ne-viewer-b-filler">
															<br />
														</span>
													</div>
												</div>
												<div className="ne-inner-overlay-container"></div>
											</div>
											<div
												className={
													'data-comment-group-box-item-doc-content-zero'
												}
											>
												​
											</div>
										</div>
									</div>
								</div>

								<div
									className={
										'data-comment-group-box-item-action'
									}
								>
									<span
										className={
											'data-comment-group-box-item-action-comment'
										}
									>
										<CommentOutlined />
									</span>
									<span
										className={
											'data-comment-group-box-item-action-comment'
										}
									>
										<WechatOutlined />
									</span>
									<span
										className={
											'data-comment-group-box-item-action-comment'
										}
									>
										<EditOutlined />
									</span>
									<span
										className={
											'data-comment-group-box-item-action-comment'
										}
									>
										<DeleteOutlined />
									</span>
									<span
										className={
											'data-comment-group-box-item-action-comment'
										}
									>
										<CopyOutlined />
									</span>
								</div>
							</div>
						</div>

						<div className={'data-comment-group-box-item'}>
							<div className={'data-comment-group-box-avatar'}>
								<img
									loading="lazy"
									data-testid="img-avatar"
									src="https://mdn.alipayobjects.com/huamei_0prmtq/afts/img/A*khrYRYi6VN0AAAAAAAAAAAAADvuFAQ/original"
									className={
										'data-comment-group-box-avatar-img'
									}
									alt="flord"
								/>
							</div>

							<div className={'data-comment-group-box-item-main'}>
								<div>
									<div
										className={
											'data-comment-group-box-item-name'
										}
									>
										<span>tom</span>
									</div>
									<div
										className={
											'data-comment-group-box-item-time'
										}
									>
										<span>昨天 11:54</span>
									</div>
								</div>

								<div
									className={
										'data-comment-group-box-item-content'
									}
								>
									<div
										className={
											'data-comment-group-box-item-doc-content'
										}
									>
										<div>
											<div
												className="ne-viewer ne-simple-ui ne-typography-traditional"
												id="u832d"
											>
												<div className="ne-viewer-header">
													<button
														type="button"
														className="ne-ui-exit-max-view-btn"
													>
														返回文档
													</button>
												</div>
												<div className="ne-viewer-body">
													<div className={'ne-p'}>
														<div
															className={
																'ne-text'
															}
															id="u295b706e"
														>
															233333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
														</div>
														<span className="ne-viewer-b-filler">
															<br />
														</span>
													</div>
												</div>
												<div className="ne-inner-overlay-container"></div>
											</div>
											<div
												className={
													'data-comment-group-box-item-doc-content-zero'
												}
											>
												​
											</div>
										</div>
									</div>
								</div>

								<div
									className={
										'data-comment-group-box-item-action'
									}
								>
									<span
										className={
											'data-comment-group-box-item-action-comment'
										}
									>
										<CommentOutlined />
									</span>
									<span
										className={
											'data-comment-group-box-item-action-comment'
										}
									>
										<WechatOutlined />
									</span>
									<span
										className={
											'data-comment-group-box-item-action-comment'
										}
									>
										<EditOutlined />
									</span>
									<span
										className={
											'data-comment-group-box-item-action-comment'
										}
									>
										<DeleteOutlined />
									</span>
									<span
										className={
											'data-comment-group-box-item-action-comment'
										}
									>
										<CopyOutlined />
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CommentDrawer;
