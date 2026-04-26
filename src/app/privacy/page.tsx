import Reveal from "@/shared/ui/Reveal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 | jeawift",
  description: "jeawift 포트폴리오의 개인정보처리방침",
  openGraph: {
    title: "개인정보처리방침 | jeawift",
    description: "jeawift 포트폴리오의 개인정보처리방침",
    type: "website",
    url: "https://jeagu.me/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
      <Reveal threshold={0.1} triggerOnce>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playpen mb-4">
          개인정보처리방침
        </h1>
      </Reveal>

      <Reveal threshold={0.1} triggerOnce>
        <p className="text-sm text-text/60 mb-8">
          최종 수정일: 2026년 2월 8일
        </p>
      </Reveal>

      <div className="space-y-12 text-text/80">
        <Reveal threshold={0.1} triggerOnce>
          <section>
            <p className="mb-4 leading-relaxed">
              jaekyu 포트폴리오(이하 &lsquo;본 사이트&rsquo;)는 이용자의 개인정보를 중요시하며, 「개인정보 보호법」 등 관련 법령을 준수하고 있습니다. 
              본 개인정보처리방침은 본 사이트가 제공하는 서비스 이용 과정에서 수집·이용되는 개인정보의 처리 내역을 알려드리기 위해 작성되었습니다.
            </p>
          </section>
        </Reveal>

        <Reveal threshold={0.1} triggerOnce>
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-text mb-4">
              1. 수집하는 개인정보의 항목 및 수집 방법
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-text mb-2">가. 수집 항목</h3>
                <div className="ml-4 space-y-2">
                  <p><strong className="text-text">• 블로그 구독 신청 시:</strong> 이메일 주소</p>
                  <p><strong className="text-text">• 자동 수집 정보:</strong></p>
                  <ul className="ml-6 list-disc space-y-1">
                    <li>서비스 이용 기록</li>
                    <li>접속 로그</li>
                    <li>쿠키</li>
                    <li>접속 IP 정보</li>
                    <li>기기 정보</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-text mb-2">나. 수집 방법</h3>
                <ul className="ml-4 space-y-1">
                  <li>• 블로그 구독 신청 양식을 통한 직접 입력</li>
                  <li>• 웹사이트 이용 과정에서 자동 수집 도구를 통한 수집</li>
                </ul>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal threshold={0.1} triggerOnce>
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-text mb-4">
              2. 개인정보의 수집 및 이용 목적
            </h2>
            <ul className="ml-4 space-y-2">
              <li>• <strong className="text-text">블로그 구독 서비스:</strong> 새로운 블로그 게시글 알림 발송</li>
              <li>• <strong className="text-text">서비스 개선:</strong> 웹사이트 방문 통계 분석 및 이용자 행태 분석</li>
              <li>• <strong className="text-text">광고 게재:</strong> Google AdSense를 통한 맞춤형 광고 제공</li>
            </ul>
          </section>
        </Reveal>

        <Reveal threshold={0.1} triggerOnce>
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-text mb-4">
              3. 개인정보의 보유 및 이용 기간
            </h2>
            <div className="space-y-2">
              <p>본 사이트는 원칙적으로 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 다음의 경우는 예외로 합니다:</p>
              <ul className="ml-4 space-y-2 mt-3">
                <li>
                  • <strong className="text-text">블로그 구독 이메일:</strong> 구독 해지 시까지 보유
                </li>
                <li>
                  • <strong className="text-text">자동 수집 정보:</strong> Google Analytics 및 Google AdSense의 데이터 보관 정책에 따름
                </li>
              </ul>
            </div>
          </section>
        </Reveal>

        <Reveal threshold={0.1} triggerOnce>
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-text mb-4">
              4. 개인정보의 제3자 제공
            </h2>
            <p className="mb-3">본 사이트는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우는 예외로 합니다:</p>
            <ul className="ml-4 space-y-1">
              <li>• 이용자가 사전에 동의한 경우</li>
              <li>• 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
            </ul>
          </section>
        </Reveal>

        <Reveal threshold={0.1} triggerOnce>
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-text mb-4">
              5. 개인정보 처리의 위탁
            </h2>
            <p className="mb-3">본 사이트는 서비스 제공을 위해 다음과 같이 개인정보 처리를 위탁하고 있습니다:</p>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-border text-sm">
                <thead className="bg-surface">
                  <tr>
                    <th className="border border-border px-4 py-2 text-left font-semibold text-text">수탁업체</th>
                    <th className="border border-border px-4 py-2 text-left font-semibold text-text">위탁 업무 내용</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-4 py-2">Google LLC</td>
                    <td className="border border-border px-4 py-2">웹사이트 방문 통계 분석 (Google Analytics), 광고 게재 (Google AdSense)</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">Notion Labs, Inc.</td>
                    <td className="border border-border px-4 py-2">콘텐츠 관리 및 데이터 저장</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">Resend</td>
                    <td className="border border-border px-4 py-2">이메일 발송 서비스</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">Vercel Inc.</td>
                    <td className="border border-border px-4 py-2">웹사이트 호스팅 및 운영</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </Reveal>

        <Reveal threshold={0.1} triggerOnce>
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-text mb-4">
              6. 쿠키(Cookie)의 운영 및 활용
            </h2>
            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-semibold text-text mb-2">가. 쿠키란?</h3>
                <p className="ml-4">
                  쿠키는 웹사이트를 운영하는 데 이용되는 서버가 이용자의 브라우저에 보내는 아주 작은 텍스트 파일로, 
                  이용자의 컴퓨터 하드디스크에 저장됩니다.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-text mb-2">나. 쿠키의 사용 목적</h3>
                <ul className="ml-4 space-y-1">
                  <li>• 블로그 게시글 조회수 중복 방지</li>
                  <li>• 사이트 방문 및 이용 형태 분석</li>
                  <li>• 맞춤형 광고 제공 (Google AdSense)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-text mb-2">다. 쿠키 설정 거부 방법</h3>
                <p className="ml-4 mb-2">
                  이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 
                  쿠키가 저장될 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다.
                </p>
                <p className="ml-4 text-sm">
                  다만, 쿠키 설치를 거부할 경우 웹 사용이 불편해지거나 로그인이 필요한 일부 서비스 이용에 어려움이 있을 수 있습니다.
                </p>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal threshold={0.1} triggerOnce>
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-text mb-4">
              7. 개인정보의 파기 절차 및 방법
            </h2>
            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-semibold text-text mb-2">가. 파기 절차</h3>
                <p className="ml-4">
                  이용자가 입력한 정보는 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 
                  내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후 파기됩니다.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-text mb-2">나. 파기 방법</h3>
                <ul className="ml-4 space-y-1">
                  <li>• 전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제</li>
                  <li>• 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기</li>
                </ul>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal threshold={0.1} triggerOnce>
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-text mb-4">
              8. 정보주체의 권리·의무 및 행사 방법
            </h2>
            <div className="space-y-3">
              <p>이용자는 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다:</p>
              <ul className="ml-4 space-y-2">
                <li>• 개인정보 열람 요구</li>
                <li>• 오류 등이 있을 경우 정정 요구</li>
                <li>• 삭제 요구</li>
                <li>• 처리정지 요구</li>
              </ul>
              <p className="mt-3">
                위 권리 행사는 개인정보 보호책임자에게 서면, 전화, 전자우편 등을 통하여 하실 수 있으며, 
                본 사이트는 이에 대해 지체 없이 조치하겠습니다.
              </p>
            </div>
          </section>
        </Reveal>

        <Reveal threshold={0.1} triggerOnce>
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-text mb-4">
              9. 개인정보의 안전성 확보 조치
            </h2>
            <p className="mb-3">본 사이트는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다:</p>
            <ul className="ml-4 space-y-1">
              <li>• 개인정보 취급 직원의 최소화 및 교육</li>
              <li>• 개인정보의 암호화</li>
              <li>• 해킹 등에 대비한 기술적 대책</li>
              <li>• 접근 통제를 위한 필요한 조치</li>
            </ul>
          </section>
        </Reveal>

        <Reveal threshold={0.1} triggerOnce>
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-text mb-4">
              10. 개인정보 보호책임자
            </h2>
            <div className="ml-4 space-y-2">
              <p>본 사이트는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>
              <div className="mt-4 space-y-1">
                <p><strong className="text-text">개인정보 보호책임자:</strong> 박재규</p>
                <p><strong className="text-text">이메일:</strong> pjk971113@gmail.com</p>
                <p><strong className="text-text">연락처:</strong> 010-9168-9622</p>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal threshold={0.1} triggerOnce>
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-text mb-4">
              11. 개인정보 처리방침의 변경
            </h2>
            <p>
              본 개인정보처리방침은 법령, 정책 또는 보안기술의 변경에 따라 내용의 추가, 삭제 및 수정이 있을 시에는 
              변경 최소 7일 전에 웹사이트를 통해 변경사유 및 내용 등을 공지하도록 하겠습니다.
            </p>
          </section>
        </Reveal>

        <Reveal threshold={0.1} triggerOnce>
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-text mb-4">
              12. 개인정보의 국외 이전
            </h2>
            <p className="mb-3">
              본 사이트는 서비스 제공을 위해 아래와 같이 개인정보를 국외로 이전하고 있습니다:
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-border text-sm">
                <thead className="bg-surface">
                  <tr>
                    <th className="border border-border px-4 py-2 text-left font-semibold text-text">이전받는 자</th>
                    <th className="border border-border px-4 py-2 text-left font-semibold text-text">이전 국가</th>
                    <th className="border border-border px-4 py-2 text-left font-semibold text-text">이전 목적</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-4 py-2">Google LLC</td>
                    <td className="border border-border px-4 py-2">미국</td>
                    <td className="border border-border px-4 py-2">웹 분석 및 광고</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">Notion Labs, Inc.</td>
                    <td className="border border-border px-4 py-2">미국</td>
                    <td className="border border-border px-4 py-2">데이터 저장</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">Vercel Inc.</td>
                    <td className="border border-border px-4 py-2">미국</td>
                    <td className="border border-border px-4 py-2">호스팅</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">Resend</td>
                    <td className="border border-border px-4 py-2">미국</td>
                    <td className="border border-border px-4 py-2">이메일 발송</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </Reveal>

        <Reveal threshold={0.1} triggerOnce>
          <section className="border-t border-border pt-8">
            <h2 className="text-xl sm:text-2xl font-bold text-text mb-4">
              13. 기타 개인정보 침해에 대한 신고 및 상담
            </h2>
            <p className="mb-3">개인정보 침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다:</p>
            <ul className="ml-4 space-y-2">
              <li>
                <strong className="text-text">개인정보 침해신고센터</strong><br />
                <span className="text-sm ml-2">전화: (국번없이) 118<br /></span>
                <span className="text-sm ml-2">홈페이지: <a href="https://privacy.kisa.or.kr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">privacy.kisa.or.kr</a></span>
              </li>
              <li>
                <strong className="text-text">개인정보 분쟁조정위원회</strong><br />
                <span className="text-sm ml-2">전화: (국번없이) 1833-6972<br /></span>
                <span className="text-sm ml-2">홈페이지: <a href="https://www.kopico.go.kr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.kopico.go.kr</a></span>
              </li>
              <li>
                <strong className="text-text">대검찰청 사이버수사과</strong><br />
                <span className="text-sm ml-2">전화: (국번없이) 1301<br /></span>
                <span className="text-sm ml-2">홈페이지: <a href="https://www.spo.go.kr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.spo.go.kr</a></span>
              </li>
              <li>
                <strong className="text-text">경찰청 사이버안전국</strong><br />
                <span className="text-sm ml-2">전화: (국번없이) 182<br /></span>
                <span className="text-sm ml-2">홈페이지: <a href="https://cyberbureau.police.go.kr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">cyberbureau.police.go.kr</a></span>
              </li>
            </ul>
          </section>
        </Reveal>
      </div>
    </section>
  );
}
