/* Copyright (c) 2018-2019 Synopsys, Inc. All rights reserved worldwide. */

import React from "react";
import PropTypes from "prop-types";
import { injectIntl } from "react-intl";
import _ from "lodash";
import Table from "material-ui/Table/Table";
import TableBody from "material-ui/Table/TableBody";
import TableHeader from "material-ui/Table/TableHeader";
import TableHeaderColumn from "material-ui/Table/TableHeaderColumn";
import TableRow from "material-ui/Table/TableRow";
import TableRowColumn from "material-ui/Table/TableRowColumn";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import FloatingActionButton from "material-ui/FloatingActionButton";
import IconButton from "material-ui/IconButton";
import SearchIcon from "material-ui/svg-icons/action/search";
import RadioButton from "material-ui/RadioButton/RadioButton";
import RadioButtonGroup from "material-ui/RadioButton/RadioButtonGroup";
import RaisedButton from "material-ui/RaisedButton";
import Toggle from "material-ui/Toggle";
import Checkbox from "material-ui/Checkbox";
import TextField from "material-ui/TextField";
import { grey200, grey500 } from "material-ui/styles/colors";
import ArrowUp from "material-ui/svg-icons/hardware/keyboard-arrow-up";
import ArrowDown from "material-ui/svg-icons/hardware/keyboard-arrow-down";
import { Tooltip } from "react-lightweight-tooltip";
import ReactPaginate from "react-paginate";
import moment from "moment";

import Copy from "./images/ic_copy_button.svg";
import KeyIcon from "./images/ic_view_key_button.svg";
import DeleteIcon from "./images/ic_delete_button.svg";

const stripHtml = str => str.replace(/<\/?[^>]+(>|$)/g, "");

const TablePage = props => {
  const handleSort = (sortBy, order) => {
    const { config: tableConfig } = props;
    const {
      actions = {
        handleSort: {
          label: "",
          action: () => {}
        }
      }
    } = tableConfig;
    return actions.handleSort.action(sortBy, order);
  };

  const handleCopy = item => {
    const { config: tableConfig } = props;
    tableConfig.actions.copyTenantID.handleCopy(item.id);
  };

  const handleModeratorCheck = (id, event, isChecked) => {
    const { config: tableConfig } = props;
    tableConfig.actions.moderator.action(id, isChecked);
  };

  const handlePerPageChange = (event, index, values) => {
    const { config: tableConfig } = props;
    tableConfig.actions.loadNext.handlePerPageChange(event, index, values);
  };

  const downloadSignatureCert = (item, event, index, value) => {
    const { config: tableConfig } = props;
    if (value === "download") {
      const url = `${tableConfig.certificateDownloadLinks.certDownloadLink}/${
        item.id
      }/${tableConfig.certificateDownloadLinks.signatureLink}${
        tableConfig.certificateDownloadLinks.params
      }`;
      tableConfig.actions.signatureCert.handleSignatureCertDownload(url);
    }
    if (value === "downloadCSR") {
      const url = `${tableConfig.certificateDownloadLinks.certDownloadLink}/${
        item.id
      }/${tableConfig.certificateDownloadLinks.signatureCSRLink}${
        tableConfig.certificateDownloadLinks.params
      }`;
      tableConfig.actions.signatureCert.handleSignatureCertDownload(url);
    }
    if (value === "upload") {
      tableConfig.actions.signatureCert.handleSignatureCertUpload(item.id);
    }
  };

  const downloadAssertionCert = (item, event, index, value) => {
    const { config: tableConfig } = props;
    if (value === "download") {
      const url = `${tableConfig.certificateDownloadLinks.certDownloadLink}/${
        item.id
      }/${tableConfig.certificateDownloadLinks.assertionLink}${
        tableConfig.certificateDownloadLinks.params
      }`;
      tableConfig.actions.assertionCert.handleAssertionCertDownload(url);
    }
    if (value === "downloadCSR") {
      const url = `${tableConfig.certificateDownloadLinks.certDownloadLink}/${
        item.id
      }/${tableConfig.certificateDownloadLinks.assertionCSRLink}${
        tableConfig.certificateDownloadLinks.params
      }`;
      tableConfig.actions.assertionCert.handleAssertionCertDownload(url);
    }
    if (value === "upload") {
      tableConfig.actions.assertionCert.handleAssertionCertUpload(item.id);
    }
  };

  const handleViewApiKeyAction = item => {
    const { config: tableConfig } = props;
    tableConfig.actions.columnActions.handleViewApiKeyAction(item);
  };

  const handleDeleteApiKeyAction = item => {
    const { config: tableConfig } = props;
    tableConfig.actions.columnActions.handleDeleteApiKeyAction(item);
  };

  const renderCol = (styles, item, col, index) => {
    const { config: tableConfig, selectedData2, selectedData } = props;
    const tooltipStyle = {
      wrapper: {
        position: "relative",
        display: "inline-block",
        zIndex: "99 !important",
        color: "#555",
        cursor: "normal",
        width: "100%"
      },
      tooltip: {
        position: "absolute",
        zIndex: "99 !important",
        background: "#000",
        bottom: "100%",
        left: "50%",
        marginBottom: "10px",
        padding: "5px",
        WebkitTransform: "translateX(-50%)",
        msTransform: "translateX(-50%)",
        OTransform: "translateX(-50%)",
        transform: "translateX(-50%)"
      },
      content: {
        background: "#000",
        color: "#fff",
        fontSize: ".8em",
        padding: ".3em 1em",
        whiteSpace: "nowrap"
      },
      arrow: {
        position: "absolute",
        width: "0",
        height: "0",
        bottom: "-5px",
        left: "50%",
        marginLeft: "-5px",
        borderLeft: "solid transparent 5px",
        borderRight: "solid transparent 5px",
        borderTop: "solid #000 5px"
      },
      gap: {
        position: "absolute",
        width: "100%",
        height: "20px",
        bottom: "-20px"
      }
    };

    const getDate = (input, format = "YYYY-MM-DD") =>
      moment(input).format(format);
    const getDateTooltip = (input, format) => (
      <Tooltip content={getDate(input, format)} styles={tooltipStyle}>
        <div style={{ overflow: "hidden", textAlign: "center" }}>
          {getDate(input, format)}
        </div>
      </Tooltip>
    );
    const getTooltip = (input, ttStyle) => (
      <Tooltip content={input} styles={ttStyle}>
        <div style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
          {input}
        </div>
      </Tooltip>
    );

    switch (col.key) {
      case "active":
        return getTooltip(
          item.active
            ? item.locked
              ? "Locked"
              : "Enabled"
            : item.locked
            ? "Locked"
            : "Disabled",
          tooltipStyle
        );
      case "status":
        return getTooltip(
          item.status === "isPublished"
            ? "Published"
            : item.status === "isDelete"
            ? "Deleted"
            : item.status === "isUnpublished"
            ? "Unpublished"
            : "N/A",
          tooltipStyle
        );
      case "imported":
        return getTooltip(
          item.imported ? "Imported" : "Not Imported",
          tooltipStyle
        );
      case "moderator":
        // return <Toggle id={`se-list-toggle-moderator-${index}`} label="" toggled={item[col.key]} onToggle={handleStatusToggle.bind(this, item.id)} />;
        if (selectedData2 && selectedData2.length) {
          return (
            <Checkbox
              label=""
              checked={!!(selectedData2 && selectedData2.indexOf(index) !== -1)}
              disabled={
                !!(selectedData.indexOf(index) === -1 && selectedData !== "all")
              }
              onCheck={handleModeratorCheck.bind(this, item.id)}
            />
          );
        }
        return (
          <Checkbox
            label=""
            onCheck={handleModeratorCheck.bind(this, item.id)}
            disabled={
              !!(selectedData.indexOf(index) === -1 && selectedData !== "all")
            }
          />
        );
      case "createdOn":
        return getTooltip(
          item.createdOn ? moment(item[col.key]).format("MMM Do, YYYY") : "-",
          tooltipStyle
        );
      case "updatedOn":
        return getTooltip(
          item.updatedOn && item.isEdited && item.isEdited === true
            ? moment(item[col.key]).format("MMM Do, YYYY")
            : "-",
          tooltipStyle
        );
      case "participants":
        return getTooltip(
          item.participants ? item[col.key] : "-",
          tooltipStyle
        );
      case "views":
        return getTooltip(item.views ? item[col.key] : "-", tooltipStyle);
      case "useAssertKey":
        return getTooltip(
          item.useAssertKey && item.useAssertKey === true ? "On" : "Off",
          tooltipStyle
        );
      case "sendOn":
        return getTooltip(
          item.sendOn ? moment(item[col.key]).format("YYYY-MM-DD") : "-",
          tooltipStyle
        );
      case "expiresOn":
        return getTooltip(
          item.expiresOn ? moment(item[col.key]).format("YYYY-MM-DD") : "-",
          tooltipStyle
        );
      case "ntfStatus":
        return (
          <Tooltip content={item[col.key]} styles={tooltipStyle}>
            <div
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                textTransform: "capitalize"
              }}
              className={`${item[col.key]}_notification_style`}
            >
              {item[col.key]}
            </div>
          </Tooltip>
        );
      case "SignatureCertificate":
        return (
          <SelectField
            id="se-certificates-signature-cert-dropdown"
            floatingLabelText="Actions"
            onChange={downloadSignatureCert.bind(this, item)}
            maxHeight={350}
            style={{
              width: "100px",
              fontSize: "14px",
              marginTop: "-30px",
              overflowY: "none"
            }}
          >
            <MenuItem
              value="download"
              primaryText="Download"
              style={{ width: "100px" }}
            />
            <MenuItem
              value="downloadCSR"
              primaryText="Download CSR"
              style={{ width: "100px" }}
            />
            <MenuItem
              value="upload"
              primaryText="Upload"
              style={{ width: "100px" }}
            />
          </SelectField>
        );
      case "AssertionCertificate":
        return (
          <SelectField
            id="se-certificates-signature-cert-dropdown"
            floatingLabelText="Actions"
            onChange={downloadAssertionCert.bind(this, item)}
            maxHeight={350}
            style={{
              width: "100px",
              fontSize: "14px",
              marginTop: "-30px",
              overflowY: "none"
            }}
          >
            <MenuItem
              value="download"
              primaryText="Download"
              style={{ width: "100px" }}
            />
            <MenuItem
              value="downloadCSR"
              primaryText="Download CSR"
              style={{ width: "100px" }}
            />
            <MenuItem
              value="upload"
              primaryText="Upload"
              style={{ width: "100px" }}
            />
          </SelectField>
        );
      case "preview":
        return (
          <span
            style={{
              color: "#10938c",
              fontSize: "12px",
              fontFamily: "PTSans",
              paddingLeft: "5px",
              display: "inline-block",
              cursor: "pointer"
            }}
            onClick={e => {
              e.stopPropagation();
              tableConfig.actions.preview.previewCertificate(item.id);
            }}
          >
            {" "}
            preview{" "}
          </span>
        );
      case "issueToCohort":
        return (
          <a
            style={{
              color: "#10938c",
              fontSize: "12px",
              fontFamily: "PTSans",
              paddingLeft: "5px"
            }}
          >
            Issue to Cohort
          </a>
        );
      case "apitoken_actions":
        return (
          <div style={{ float: "right" }}>
            <FloatingActionButton
              zDepth={0}
              id={`se-list-buttons-view-key-${index}`}
              mini={true}
              backgroundColor={grey200}
              iconStyle={styles.editButton}
              onTouchTap={handleViewApiKeyAction.bind(this, item)}
            >
              <img src={KeyIcon} style={{ width: "100%", height: "100%" }} />
            </FloatingActionButton>
            <FloatingActionButton
              zDepth={0}
              id={`se-list-buttons-delete-key-${index}`}
              mini={true}
              backgroundColor={grey200}
              iconStyle={styles.deleteButton}
              style={{ marginLeft: "10px" }}
              onTouchTap={handleDeleteApiKeyAction.bind(this, item)}
            >
              <img src={DeleteIcon} style={{ width: "100%", height: "100%" }} />
            </FloatingActionButton>
          </div>
        );
      case "id":
        return (
          <div>
            {getTooltip(item[col.key], tooltipStyle)}
            {0 ? (
              <div
                style={{
                  display: "inline-block",
                  position: "absolute",
                  zIndex: 0
                }}
              >
                <IconButton
                  onClick={handleCopy.bind(this, item)}
                  tooltip="Copy tenant ID"
                  touch={true}
                  tooltipPosition="top-center"
                  style={{ bottom: "16px" }}
                  iconStyle={{ width: "100%", height: "100%" }}
                >
                  <img src={Copy} style={{ width: "100%", height: "100%" }} />
                </IconButton>
              </div>
            ) : null}
          </div>
        );
      case "AssertionExpires":
        return getDateTooltip(item.assertPublicCertExpiry);
      case "SignatureExpires":
        return getDateTooltip(item.tenantPublicCertExpiry);
      case "LastUpdate":
        return getDateTooltip(item.updatedOn);
      case "cohortDueDate":
        return getDateTooltip(col.value);
      case "description":
        return (
          <div
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
          >
            {" "}
            {stripHtml(item.description)}{" "}
          </div>
        );
      case "courseStatus":
        return getTooltip(
          item.active ? (
            <span style={{ color: "#10938c" }}> active </span>
          ) : (
            <span style={{ color: "#10938c" }}> inactive </span>
          ),
          tooltipStyle
        );
      default:
        return getTooltip(item[col.key], tooltipStyle);
    }
  };

  const renderPubUnpub = isPublished => {
    const { config: tableConfig } = props;
    if (isPublished) {
      return (
        <RadioButtonGroup
          name="publishGroup"
          onChange={tableConfig.actions.publishToggle.toggle}
          defaultSelected="publish"
          style={{ fontFamily: "PTSans", fontSize: "16px", color: "#168279" }}
        >
          <RadioButton
            value="unpublish"
            label="unpublish selected"
            disabled={
              tableConfig.actions.publishToggle.disabled || !isPublished
            }
            labelStyle={{ color: !isPublished ? "#168279" : "#4a4a4a" }}
          />
          <RadioButton
            value="publish"
            label="publish selected"
            disabled={tableConfig.actions.publishToggle.disabled || isPublished}
            labelStyle={{ color: isPublished ? "#168279" : "#4a4a4a" }}
          />
        </RadioButtonGroup>
      );
    }
    return (
      <div>
        <RadioButtonGroup
          name="publishGroup"
          onChange={tableConfig.actions.publishToggle.toggle}
          defaultSelected="unpublish"
          style={{ fontFamily: "PTSans", fontSize: "16px", color: "#168279" }}
        >
          <RadioButton
            value="unpublish"
            label="unpublish selected"
            disabled={
              tableConfig.actions.publishToggle.disabled || !isPublished
            }
            labelStyle={{ color: !isPublished ? "#168279" : "#4a4a4a" }}
          />
          <RadioButton
            value="publish"
            label="publish selected"
            disabled={tableConfig.actions.publishToggle.disabled || isPublished}
            labelStyle={{ color: isPublished ? "#168279" : "#4a4a4a" }}
          />
        </RadioButtonGroup>
      </div>
    );
  };

  // Get required config and other data from props
  const {
    config: tableConfig,
    config: { data: tableData = [] },
    intl,
    selectedData,
    ...otherTableProps
  } = props;
  const {
    perPagePosition = "bottom",
    searchConfig = {
      enabled: false,
      placeholder: "search...",
      handleSearch: () => {},
      searchText: ""
    },
    sortConfig = null,
    enableViewSelectedOnly = false,
    viewSelectedOnly = false,
    actions = {
      handleViewSelected: {
        action: () => {}
      }
    }
  } = tableConfig;

  // Configure Style
  const styles = tableConfig.styles || {
    floatingActionButton: {
      margin: 0,
      top: "auto",
      right: 20,
      bottom: 20,
      left: "auto",
      position: "fixed"
    },
    editButton: {
      fill: grey500,
      color: "#4a4a4a"
    },
    bulkButton: {
      marginLeft: 5
    }
  };

  // Define Helpers
  const handleBulkAction = action => () => {
    action();
  };

  const handleBulkAction2 = action => (id, event, status) => {
    action(id, event, status);
  };

  const handlePageClick = data => {
    const selected = data.selected;
    const offset = Math.ceil(selected * tableConfig.pagination.perPage);

    tableConfig.actions.loadNext.action(offset, selected);
  };

  const getPerPageControl = () => {
    if (
      tableConfig.pagination &&
      tableConfig.actions &&
      tableConfig.actions.loadNext &&
      tableConfig.actions.loadNext.handlePerPageChange
    ) {
      return (
        <div className="row middle-xs start-xs start-sm">
          <div className="col-xs-12">
            <span style={{ verticalAlign: "middle" }}>{"show"}</span>
            <SelectField
              id="se-list-pagination-rows-per-page"
              multiple={false}
              value={tableConfig.pagination.perPage}
              onChange={handlePerPageChange.bind(this)}
              style={{ width: "80px", verticalAlign: "middle" }}
              autoWidth={false}
            >
              <MenuItem key="0" value={10} primaryText="10" />
              <MenuItem key="1" value={20} primaryText="20" />
              <MenuItem key="2" value={30} primaryText="30" />
            </SelectField>
            <span style={{ verticalAlign: "middle" }}>{"rows per page"}</span>
          </div>
        </div>
      );
    }
    return null;
  };
  // The actual view starts from here
  return (
    <div className="row" style={{ clear: "both" }}>
      <div className="col-xs-12">
        <div
          className="row"
          style={{
            display: "inline-flex",
            width: "100%",
            marginLeft: "1rem"
          }}
        >
          <div className="col-xs-4">
            {perPagePosition === "top" ? getPerPageControl() : null}
          </div>
          {enableViewSelectedOnly ? (
            <div className="col-xs-4" style={{ alignSelf: "center" }}>
              <Checkbox
                enabled={viewSelectedOnly}
                onCheck={actions.handleViewSelected.action}
                style={{ marginLeft: "-4%" }}
                label="View Only Selected"
                labelStyle={{
                  fontFamily: "inherit",
                  width: "none",
                  left: -10
                }}
              />
            </div>
          ) : null}
          {searchConfig.enabled ? (
            <div className="col-xs-4" style={{ marginLeft: "30%" }}>
              <TextField
                id={"search"}
                placeholder={searchConfig.placeholder}
                onChange={searchConfig.handleSearch}
              />
              <SearchIcon />
            </div>
          ) : null}
        </div>
      </div>
      <div className="col-xs-12">
        <div className="row">
          {tableConfig.actions && tableConfig.actions.bulk ? (
            <div className="col-xs-12 end-xs" style={{ padding: "20px 5px" }}>
              {tableConfig.actions.bulk.map((item, index) => (
                <RaisedButton
                  key={index}
                  id={`se-list-bulk-${item.testID}`}
                  label={item.label}
                  primary={true}
                  style={styles.bulkButton}
                  overlayStyle={{ padding: "10px" }}
                  labelStyle={{
                    color: "white",
                    textTransform: "capitalize",
                    fontWeight: 700,
                    fontSize: "20px"
                  }}
                  disabledLabelColor="white"
                  disabledBackgroundColor="rgba(16,147,140,.5)"
                  disabled={item.disabled}
                  icon={item.icon ? item.icon : <span />}
                  onTouchTap={handleBulkAction(item.action)}
                />
              ))}
              {tableConfig.actions.enable ? (
                <div style={{ display: "inline-block" }}>
                  <div
                    style={{
                      width: "110px",
                      display: "inline-block",
                      height: "18px"
                    }}
                  >
                    <Toggle
                      id="se-list-toggle-active"
                      label="disable"
                      disabled={tableConfig.actions.enable.disabled}
                      toggled={tableConfig.actions.enable.toggled}
                      onToggle={handleBulkAction2(
                        tableConfig.actions.enable.action
                      )}
                    />
                  </div>
                  <div style={{ paddingLeft: "10px", display: "inline-block" }}>
                    enable
                  </div>
                </div>
              ) : (
                <span />
              )}
              {tableConfig.discussions &&
              tableConfig.discussions.isDiscussionPage ? (
                <div style={{ display: "inline-block" }}>
                  <div
                    style={{
                      width: "210px",
                      display: "inline-block",
                      height: "32px"
                    }}
                  >
                    {renderPubUnpub(
                      tableConfig.discussions.isSelectedPublished
                    )}
                  </div>
                </div>
              ) : (
                <span />
              )}
            </div>
          ) : (
            <span />
          )}
          <div className="col-xs-12">
            <Table
              {...otherTableProps}
              selectable={true}
              multiSelectable={true}
              bodyStyle={{ overflowX: "visible", overflowY: "visible" }}
            >
              <TableHeader enableSelectAll={true} displaySelectAll={true}>
                <TableRow>
                  {tableConfig.columns.map(item => (
                    <TableHeaderColumn
                      key={item.key}
                      style={{ ...styles.columns[item.key], cursor: "pointer" }}
                    >
                      {sortConfig &&
                      sortConfig.sortBy &&
                      sortConfig.order &&
                      !!item.sortable ? (
                        <div
                          onClick={() => handleSort(item.key, sortConfig.order)}
                          style={{ display: "flex", alignContent: "center" }}
                        >
                          {item.label}
                          {sortConfig.sortBy === item.key ? (
                            sortConfig.order === "asc" ? (
                              <ArrowUp style={{ marginTop: -3 }} />
                            ) : (
                              <ArrowDown style={{ marginTop: -3 }} />
                            )
                          ) : null}
                        </div>
                      ) : (
                        <div>{item.label}</div>
                      )}
                    </TableHeaderColumn>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody
                key={
                  selectedData && selectedData.length
                    ? _.sum(selectedData) + selectedData.length
                    : 0
                }
                deselectOnClickaway={false}
              >
                {tableData &&
                  tableData.map((item, index) => (
                    <TableRow
                      key={item.id}
                      rowNumber={index}
                      selected={
                        !!(
                          item.selected ||
                          (selectedData &&
                            (selectedData.indexOf(index) !== -1 ||
                              selectedData === "all"))
                        )
                      }
                    >
                      {tableConfig.columns.map(col => (
                        <TableRowColumn
                          key={col.key}
                          style={
                            styles.columnData
                              ? styles.columnData[col.key]
                              : styles.columns[col.key]
                          }
                          className="preventCellClick tableCell"
                        >
                          {col.key === "id" && 0 ? (
                            <div
                              className="idToCopy"
                              style={{ width: "70%" /* bottom: '4px' */ }}
                              onClick={e => e.stopPropagation()}
                            >
                              {renderCol(styles, item, col, index)}
                            </div>
                          ) : col.key === "SignatureCertificate" ||
                            col.key === "AssertionCertificate" ||
                            col.key === "active" ||
                            col.key === "actions" ||
                            col.key === "edit" ||
                            col.key === "moderator" ? (
                            <div
                              className="preventCellClickWrapper"
                              onClick={e => e.stopPropagation()}
                            >
                              {renderCol(styles, item, col, index)}
                            </div>
                          ) : (
                            <div>{renderCol(styles, item, col, index)}</div>
                          )}
                        </TableRowColumn>
                      ))}
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <div>
              {perPagePosition === "bottom" ? getPerPageControl() : null}
              {props.count && props.config.pagination ? (
                <div className="col-xs-12 selectCount">
                  {props.count} of {props.config.pagination.total} selected.
                </div>
              ) : (
                <span />
              )}
            </div>
          </div>
          <div className="col-xs-12 col-sm-6">
            <div className="row middle-xs start-xs end-sm">
              {tableConfig.pagination ? (
                <ReactPaginate
                  id="se-list-pagination"
                  previousLabel={"<"}
                  nextLabel={">"}
                  breakLabel="..."
                  breakClassName={"break-me"}
                  pageCount={
                    tableConfig.pagination.pages
                      ? tableConfig.pagination.pages
                      : 1
                  }
                  forcePage={
                    tableConfig.pagination.selectedPage
                      ? tableConfig.pagination.selectedPage
                      : 0
                  }
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"active"}
                />
              ) : (
                <span />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TablePage.propTypes = {
  config: PropTypes.object,
  selectedData: PropTypes.array
};

export default TablePage;
