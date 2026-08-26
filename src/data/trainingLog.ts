// 이 파일은 자동 생성됩니다. 직접 수정하지 마세요.
// 생성: tistory 프로젝트의 `python src/site_sync.py`
// 티스토리에 발행된 기업교육 후기 기록입니다.
// 모집 중인 유료 공개과정(courses 배열)과는 성격이 다르므로 섞지 마세요.

export type TrainingRecord = {
  id: string;
  title: string;
  date: string;      // YYYY-MM-DD
  summary: string;
  thumbnail: string; // public/ 기준 경로 (없으면 빈 문자열)
  tags: string[];
  url: string;       // 티스토리 원문
};

export const trainingLog: TrainingRecord[] = [
  {
    id: "camp38-20260822",
    title: "교육 수료 후 관계가 끊기는 이유, 동창회로 풀었습니다 (대학생 캠프 38기 재회 기록)",
    date: "2026-08-22",
    summary: "교육이 끝나면 관계도 같이 끝납니다. 수료식 사진 한 장을 남기고 각자의 자리로 돌아가면, 그 다음이 없습니다. 대부분의 교육 프로그램이 여기서 멈춥니다.",
    thumbnail: "/training/camp38-20260822.png",
    tags: ["대학생캠프", "캠프후기", "동창회", "교육설계"],
    url: "https://jiedu.tistory.com/2"
  }
];
