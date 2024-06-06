import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames/bind";
import styles from "../../assets/styles/Role.module.scss";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const cx = classNames.bind(styles);

const EditRoleModal = ({ isOpen, onRequestClose, data, onSave, ...rest }) => {
  const [inputValue, setInputValue] = useState(data.name);
  const rootRef = useRef(null);

  useEffect(() => {
    setInputValue(data.name);
  }, [data]);

  const handleSave = () => {
    const updatedRole = {
      id: data.id,
      name: inputValue,
      normalizedName: inputValue,
      concurrencyStamp: null,
    };
    console.log(updatedRole);
    onSave(updatedRole);
  };

  return (
    <Box
      sx={{
        height: 300,
        flexGrow: 1,
        minWidth: 300,
        transform: "translateZ(0)",
        "@media all and (-ms-high-contrast: none)": {
          display: "none",
        },
      }}
      ref={rootRef}
    >
      <Modal
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        open={isOpen}
        onClose={onRequestClose}
        aria-labelledby="edit-role-modal-title"
        aria-describedby="edit-role-modal-description"
        sx={{
          display: "flex",
          p: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
        container={() => rootRef.current}
      >
        <Box
          sx={{
            position: "relative",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: (theme) => theme.shadows[5],
            p: 4,
            zIndex: 1300,
          }}
          className={cx("modal-content")}
        >
          <Typography id="edit-role-modal-title" variant="h6" component="h2">
            Edit Role
          </Typography>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className={cx("input")}
          />
          <Box className={cx("modal-buttons")}>
            <Button
              onClick={handleSave}
              className={cx("btn", "btn-primary")}
              variant="contained"
              color="primary"
            >
              Save
            </Button>
            <Button
              onClick={onRequestClose}
              className={cx("btn", "btn-secondary")}
              variant="contained"
              color="secondary"
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

EditRoleModal.propTypes = {
  data: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default EditRoleModal;
