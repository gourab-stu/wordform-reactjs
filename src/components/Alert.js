import React from "react";

export default function Alert({alert}) {
  const capitalize = (word) => {
    return word.toLowerCase().charAt(0).toUpperCase() + word.toLowerCase().slice(1);
  };
  return (
    alert && (
      <div className={`z-1 position-absolute bottom-0 end-0 float alert alert-${alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(alert.type)}</strong>: {alert.message}
      </div>
    )
  );
}
