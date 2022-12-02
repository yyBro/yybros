function ReactTroubleShooting() {
  return (
    <>
      <h3>React 프로젝트 생성하며 발생한 오류 trouble shooting 모음</h3>
      <p>
        <b>
          npm으로 패키지 설치시 npm sill idealtree buildDeps에서 멈추는 현상
        </b>
        <ul>npm set registry http://registry.npmjs.org/</ul>
        <ul> => registry 정보를 추가해줌</ul>
      </p>
      <p>
        <b>
          git clone한 프로젝트에서 npm start 수행 시, [react-scripts'은(는) 내부
          또는 외부 명령, 실행할...] 오류 발생
        </b>
        <ul>npm update 실행</ul>
        <ul>update 끝난 후 npm start 재실행</ul>
      </p>
    </>
  );
}

export default ReactTroubleShooting;
