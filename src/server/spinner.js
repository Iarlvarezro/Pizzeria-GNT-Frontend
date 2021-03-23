export function spinner(){
    return `
    #spinner,
#spinner::before {
  height: 3px;
  width: 100%;
}
#spinner {
  background-color: #b3d4fc;
  display: -webkit-flex;
  display: flex;
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
}
#spinner::before {
  animation: running-progress 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  background-color: #3f51b5;
  content: '';
}

@keyframes running-progress {
  0% {
    margin-left: 0;
    margin-right: 100%;
  }
  50% {
    margin-left: 25%;
    margin-right: 0%;
  }
  100% {
    margin-left: 100%;
    margin-right: 0;
  }
}
    `
}