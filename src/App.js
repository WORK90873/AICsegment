import { useEffect } from "react";
import Dialog from "./Dialog";
import "./styles.css";
import Theme from "./img/theme.jpg";

/* pictures */
import EnterRoom from "./img/characters/inspenters.webp";
import Inspector1 from "./img/characters/insp1.jpg";
import Inspector2 from "./img/characters/inspectorMumbles.webp";
import Arthur0 from "./img/characters/arthur.jpg";
import Arthur1 from "./img/characters/arthur1.webp";
import Arthur2 from "./img/characters/arthur2.png";
import Gerald0 from "./img/characters/gerald0.jpg";
import Gerald1 from "./img/characters/gerald1.jpg";
import Impatient from "./img/characters/impatient.gif";
import Sit from "./img/characters/sit.jpg";
import Denying from "./img/characters/NONONO.webp";
import NotQuite from "./img/characters/notquite.gif";
import NoJerry from "./img/characters/NOjerry.gif";
import DudeSweating from "./img/characters/sweats.webp";
import Eric0 from "./img/characters/eric0.jpg";
import Eric1 from "./img/characters/eric1.webp";
import Thoughtful from "./img/characters/thoughtful.gif";
import Hesitate from "./img/characters/hesitate.gif";
import SuddenRealization from "./img/characters/suddenRealization.gif";
import BlankPhoto from "./img/characters/blankPhoto.jpg";
import Helpless from "./img/characters/helpless.gif";
import FunnyMeme from "./img/characters/funnyMeme.jpg";
import Stare from "./img/characters/stare.png";
import Stare1 from "./img/characters/stare1.jpg";
import Stare2 from "./img/characters/stare2.png";
import SuddenRecall from "./img/characters/suddenRecall.gif";
import Aggressive from "./img/characters/aggressive.jpg";
import Angry0 from "./img/characters/angry0.jpg";
import Surprise from "./img/characters/surprise0.jpg";
import Doubt from "./img/characters/doubt.png";
import SuperDoubt from "./img/characters/superDoubt.jpg";
import GrumpyCat from "./img/characters/grumpyCat.jpg";
import Smile from "./img/characters/smile.jpg";
import Annoyed from "./img/characters/annoyed.gif";
import Shouting from "./img/characters/shout.gif";
import Blink from "./img/characters/blink.gif";

const VP_THRESHOLD = 50;

function App() {
    function isInViewport(el, percentVisible) {
        let rect = el.getBoundingClientRect(),
            windowHeight =
                window.innerHeight || document.documentElement.clientHeight;

        return !(
            Math.floor(
                100 - ((rect.top >= 0 ? 0 : rect.top) / +-rect.height) * 100
            ) < percentVisible ||
            Math.floor(
                100 - ((rect.bottom - windowHeight) / rect.height) * 100
            ) < percentVisible
        );
    }

    useEffect(() => {
        const domListener = document.addEventListener(
            "DOMContentLoaded",
            () => {
                const all = document.querySelectorAll(".fade");
                all.forEach((each) => {
                    if (isInViewport(each, VP_THRESHOLD)) {
                        each.style.opacity = "1";
                    } else {
                        each.style.opacity = "0";
                    }
                });
                window.onscroll = () => {
                    all.forEach((each) => {
                        if (isInViewport(each, VP_THRESHOLD)) {
                            each.style.opacity = "1";
                        } else {
                            each.style.opacity = "0";
                        }
                    });
                };
            }
        );

        return () => {
            document.removeEventListener("DOMContentLoaded", domListener);
        };
    });

    return (
        <div className="App">
            <div
                style={{
                    position: "relative",
                    display: "block",
                    height: "900px",
                }}
            >
                <img
                    alt="jfkdajf;ls"
                    style={{
                        position: "absolute",
                        width: "100%",
                        minWidth: "800px",
                        minHeight: "800px",
                        height: "100%",
                        objectFit: "cover",
                        zIndex: "-10",
                    }}
                    src={Theme}
                />
                <h1
                    style={{
                        zIndex: "100",
                        position: "absolute",
                        top: "75%",
                        left: "30%",
                        fontFamily: "cursive",
                    }}
                >
                    The Inspector Enters Scene
                </h1>
                <button
                    style={{
                        zIndex: "100",
                        position: "absolute",
                        top: "85%",
                        left: "40%",
                    }}
                    className="btn btn-info"
                    onClick={() =>
                        window.scrollTo({
                            top: 914.9166870117188,
                            behavior: "smooth",
                        })
                    }
                >
                    Start your exploration
                </button>
            </div>
            <div className="dialogs">
                <Dialog
                    reversed={true}
                    text="/* The inspector enters, and Edna goes, closing door after her. The inspector need not be a
        big man but he creates at once an impression of massiveness, solidity and purposefulness. He is
        a man in his fifties, dressed in a plain darkish suit of the period. He speaks carefully, weightily,
        and has a disconcerting habit of looking hard at the person he addresses before actually
        speaking. */"
                    image={EnterRoom}
                    italic={true}
                />
                <Dialog
                    reversed={false}
                    text="Mr Birling?"
                    image={Inspector1}
                />
                <Dialog
                    reversed={true}
                    text="Yes. Sit down inspector."
                    image={Arthur0}
                />
                <Dialog
                    reversed={false}
                    text="(sitting) Thank you, sir."
                    image={Sit}
                />
                <Dialog
                    reversed={true}
                    text="Have a glass of port – or a little whisky?"
                    image={Arthur2}
                />
                <Dialog
                    reversed={false}
                    text="No, thank you, Mr Birling. I'm on duty."
                    image={Denying}
                />
                <Dialog
                    reversed={true}
                    text="You're new, aren't you?"
                    image={Arthur2}
                />
                <Dialog
                    reversed={false}
                    text="Yes, sir. Only recently transferred."
                    image={Inspector2}
                />
                <Dialog
                    reversed={true}
                    text="I thought you must be. I was an alderman for years – and lord mayor two years ago – and I’m still on the bench – so I know the brumley police offices pretty well – and I thought I’d never seen you before."
                    image={Arthur2}
                />
                <Dialog reversed={false} text="Quite so." image={NotQuite} />
                <Dialog
                    reversed={true}
                    text="Well, what can I do for you? Some trouble about a warrant?"
                    image={Arthur2}
                />
                <Dialog
                    reversed={false}
                    text="No, Mr Birling."
                    image={NoJerry}
                />
                <Dialog
                    reversed={true}
                    text="(after a pause, with a touch of impatience) Well, what is it then?"
                    image={DudeSweating}
                />
                <Dialog
                    reversed={true}
                    text="Eric: (involuntarily) My god!"
                    image={Eric0}
                />
                <Dialog
                    reversed={true}
                    text="Inspector: Yes, she was in great agony. They did everything they could for her at the infirmary, but she died. Suicide, of course."
                    image={Inspector2}
                />
                <Dialog
                    reversed={false}
                    text="Birling: (rather impatiently) Yes, yes. Horrid business. But I don't understand why you should come here, inspector –"
                    image={Impatient}
                />
                <Dialog
                    reversed={true}
                    text="Inspector: (cutting through, massively) I’ve been round to the room she had, and she'd left a letter there and a sort of diary. Like a lot of these young women who get into various kinds of trouble, she'd used more than one name. But her original name – her real name – was Eva Smith."
                    image={Inspector2}
                />
                <Dialog
                    reversed={false}
                    text="Birling: (thoughtfully) Eva Smith?"
                    image={Thoughtful}
                />
                <Dialog
                    reversed={true}
                    text="Inspector: Do you remember her, Mr Birling?"
                    image={Inspector2}
                />
                <Dialog
                    reversed={false}
                    text="Birling: (slowly) No – I seem to remember hearing that name – Eva Smith – somewhere. But it doesn't convey anything to me. And I don't see where I come into this."
                    image={Hesitate}
                />
                <Dialog
                    reversed={true}
                    text="Inspector: She was employed in your works at one time."
                    image={Inspector2}
                />
                <Dialog
                    reversed={false}
                    text="Birling: Oh – that's it, is it? Well, we've several hundred young women there, y'know, and they keep changing."
                    image={SuddenRealization}
                />
                <Dialog
                    reversed={true}
                    text="Inspector: This young women, Eva Smith, was out of the ordinary. I found a photograph
of her in her lodgings. Perhaps you'd remember her from that."
                    image={Inspector2}
                />
                <Dialog
                    reversed={true}
                    italic={true}
                    text="/* inspector takes a photograph, about postcard size, out of his pocket and goes to
Birling. Both Gerald and Eric rise to have a look at the photograph, but the inspector interposes
himself between them and the photograph. They are surprised and rather annoyed. Birling stares
hard, and with recognition, at the photograph, which the inspector then replaces in his pocket. */"
                    image={BlankPhoto}
                />
                <Dialog
                    reversed={false}
                    text="Gerald: (showing annoyance) Any particular reason why I shouldn't see this girl's
photograph, inspector?"
                    image={Gerald0}
                />
                <Dialog
                    reversed={true}
                    text="Inspector: (coolly, looking hard at him) There might be."
                    image={Inspector2}
                />
                <Dialog
                    reversed={false}
                    text="Eric: And the same applies to me, I suppose?"
                    image={Eric0}
                />
                <Dialog
                    reversed={true}
                    text="Inspector: Yes."
                    image={Inspector2}
                />
                <Dialog
                    reversed={false}
                    text="Gerald: I can't imagine what it could be."
                    text2="Eric: Neither can I."
                    image={Helpless}
                />
                <Dialog
                    reversed={true}
                    text="Birling: And I must say, I agree with them, inspector."
                    image={Arthur2}
                />
                <Dialog
                    reversed={true}
                    text="Inspector: It's the way I like to go to work. One person and one line of inquiry at a time. Otherwise, there's a muddle."
                    image={Inspector2}
                />
                <Dialog
                    reversed={false}
                    text="Birling: I see. Sensible really. (moves restlessly, then turns.) you've had enough of that port, Eric."
                    image={FunnyMeme}
                />
                <Dialog
                    reversed={true}
                    italic={true}
                    text="/* the inspector is watching Birling and now Birling notices him. */"
                    image={Stare}
                />
                <Dialog
                    reversed={false}
                    text="Inspector: I think you remember Eva Smith now don't you. Mr Birling?"
                    image={Inspector2}
                />
                <Dialog
                    reversed={true}
                    text="Birling: Yes, I do. She was one of my employees and then I discharged her."
                    image={SuddenRecall}
                />
                <Dialog
                    reversed={false}
                    text="Eric: Is that why she committed suicide? When was this, father?"
                    image={Eric0}
                />
                <Dialog
                    reversed={true}
                    text="Birling: Just keep quiet, Eric, and don't get excited. This girl left us nearly two years ago. Let me see – it must have been in the early autumn of nineteen-ten."
                    image={Aggressive}
                />
                <Dialog
                    reversed={false}
                    text="Inspector: Yes. End of September, nineteen-ten."
                    image={Inspector2}
                />
                <Dialog
                    reversed={true}
                    text="Birling: That's right."
                    image={Arthur1}
                />
                <Dialog
                    reversed={false}
                    text="Gerald: Look here, sir. Wouldn't you rather I was out of this?"
                    image={Gerald0}
                />
                <Dialog
                    reversed={true}
                    text="Birling: I don't mind your being here, Gerald. And I’m sure you've no objection, have
                          you, inspector? Perhaps I ought to explain first that this is Mr Gerald croft – the son of sir
                          George croft – you know, crofts limited."
                    image={Arthur1}
                />
                <Dialog
                    reversed={false}
                    text="Inspector: Mr Gerald croft, eh?"
                    image={Inspector2}
                />
                <Dialog
                    reversed={true}
                    text="Birling: Yes. Incidentally we've been modestly celebrating his engagement to my daughter, Sheila."
                    image={Arthur0}
                />
                <Dialog
                    reversed={false}
                    text="Inspector: I see. Mr croft is going to marry miss Sheila Birling?"
                    image={Inspector2}
                />
                <Dialog
                    reversed={true}
                    text="Gerald: (smiling) I hope so."
                    image={Gerald1}
                />
                <Dialog
                    reversed={false}
                    text="Inspector: (gravely) Then I'd prefer you to stay."
                    image={Inspector2}
                />
                <Dialog
                    reversed={false}
                    text="Gerald: (surprised) Oh – all right."
                    image={Surprise}
                />
                <Dialog
                    reversed={true}
                    text="Birling: (somewhat impatiently) Look – there's nothing mysterious – or scandalous –
                            about this business – at least not so far as I’m concerned. It's perfectly straightforward case, and
                            as it happened more than eighteen months ago – nearly two years ago – obviously it has nothing
                            whatever to do with the wretched girl's suicide. Eh, inspector?"
                    image={Impatient}
                />
                <Dialog
                    reversed={false}
                    text="Inspector: No, sir. I can't agree with you there."
                    image={Inspector2}
                />
                <Dialog
                    reversed={true}
                    text="Birling: Why not?"
                    image={Doubt}
                />
                <Dialog
                    reversed={false}
                    text="Inspector: Because what happened to her then may have determined what happened to
                          her afterwards, and what happened to her afterwards may have driven her to suicide. A chain of
                          events."
                    image={Inspector2}
                />
                <Dialog
                    reversed={true}
                    text="Birling: Oh well – put like that, there's something in what you say. Still, I can't accept any
                            responsibility. If we were all responsible for everything that happened to everybody we'd had
                            anything to do with, it would be very awkward, wouldn't it?"
                    image={Arthur2}
                />
                <Dialog
                    reversed={false}
                    text="Inspector: Very awkward."
                    image={Inspector2}
                />
                <Dialog
                    reversed={true}
                    text="Birling: We'd all be in an impossible position, wouldn't we?"
                    image={Arthur2}
                />
                <Dialog
                    reversed={true}
                    text="Eric: By jove, yes. And as you were saying, dad, a man has to look after himself-"
                    image={Eric0}
                />
                <Dialog
                    reversed={true}
                    text="Birling: Yes, well, we needn't go into all that."
                    image={Arthur2}
                />
                <Dialog
                    reversed={false}
                    text="Inspector: Go into what?"
                    image={Doubt}
                />
                <Dialog
                    reversed={true}
                    text="Birling: Oh – just before you came – I’d been giving these young men a little good
                            advice. Now – about this girl, Eva Smith. I remember her quite well now. She was a lively good-
                            looking girl – country-bred, I fancy – and she'd been working in one of our machine shops for
                            over a year. A good worker too. In fact, the foreman there told me he was ready to promote her
                            into what we call a leading operator – head of a small group of girls. But after they came back
                            from their holidays that august, they were all rather restless, and they suddenly decided to ask for
                            more money. They were averaging about twenty-two and six, which was neither more nor less
                            than is paid generally in our industry. They wanted the rates raised so that they could average
                            about twenty-five shillings a week. I refused, of course."
                    image={Arthur1}
                />
                <Dialog reversed={false} text="Inspector: Why?" image={Doubt} />
                <Dialog
                    reversed={true}
                    text="Birling: (surprised) Did you say 'why?'?"
                    image={SuperDoubt}
                />
                <Dialog
                    reversed={false}
                    text="Inspector: Yes. Why did you refuse?"
                    image={Inspector2}
                />
                <Dialog
                    reversed={true}
                    text="Birling: Well, inspector, I don't see that it's any concern of yours how I choose to run my business. Is it now?"
                    image={Arthur2}
                />
                <Dialog
                    reversed={false}
                    text="Inspector: It might be, you know."
                    image={Inspector2}
                />
                <Dialog
                    reversed={true}
                    text="Birling: I don't like that tone."
                    image={GrumpyCat}
                />
                <Dialog
                    reversed={false}
                    text="Inspector: I’m sorry. But you asked me a question."
                    image={Inspector2}
                />
                <Dialog
                    reversed={true}
                    text="Birling: And you asked me a question before that, a quite unnecessary question too."
                    image={Arthur2}
                />
                <Dialog
                    reversed={false}
                    text="Inspector: It's my duty to ask questions."
                    image={Inspector2}
                />

                <Dialog
                    reversed={true}
                    text="Birling: Well it's my duty to keep labour costs down. And if I’d agreed to this demand for
                            a new rate we'd have added about twelve per cent to our labour costs. Does that satisfy you? So I
                            refused. Said I couldn't consider it. We were paying the usual rates and if they didn't like those
                            rates, they could go and work somewhere else. It's a free country, I told them."
                    image={Smile}
                />
                <Dialog
                    reversed={true}
                    text="Eric: It isn't if you can't go and work somewhere else."
                    image={Eric1}
                />
                <Dialog
                    reversed={true}
                    text="Inspector: Quite so."
                    image={Inspector2}
                />
                <Dialog
                    reversed={false}
                    text="Birling: (to Eric) Look – just you keep out of this. You hadn't even started in the works
                            when this happened. So they went on strike. That didn't last long, of course."
                    image={Arthur0}
                />
                <Dialog
                    reversed={false}
                    text="Gerald: Not if it was just after the holidays. They'd be all broke – if I know them."
                    image={Gerald0}
                />
                <Dialog
                    reversed={true}
                    text="Birling: Right, Gerald. They mostly were. And so was the strike, after a week or two.
                            Pitiful affair. Well, we let them all come back – at the old rates – except the four or five ring-
                            leaders, who'd started the trouble. I went down myself and told them to clear out. And this girl.
                            Eva Smith, was one of them, she'd had a lot to say – far too much – so she had to go."
                    image={Arthur2}
                />
                <Dialog
                    reversed={false}
                    text="Gerald: You couldn't have done anything else."
                    image={Gerald0}
                />
                <Dialog
                    reversed={true}
                    text="Eric: He could. He could have kept her on instead of throwing her out. I call it tough luck."
                    image={Eric1}
                />
                <Dialog
                    reversed={true}
                    text="Birling: Rubbish! If you don't come down sharply on some of these people, they'd soon be asking for the earth."
                    image={Arthur2}
                />
                <Dialog
                    reversed={false}
                    text="Gerald: I should say so!"
                    image={Gerald0}
                />
                <Dialog
                    reversed={false}
                    text="Inspector: They might. But after all it's better to ask for the earth than to take it."
                    image={Inspector2}
                />
                <Dialog
                    reversed={true}
                    text="Birling: (staring at the inspector) What did you say your name was, inspector?"
                    image={Stare1}
                />
                <Dialog
                    reversed={false}
                    text="Inspector: google. G. double O-L-E."
                    image={Inspector2}
                />
                <Dialog
                    reversed={true}
                    text="Birling: How do you get on with our chief constable, colonel Roberts?"
                    image={Arthur1}
                />
                <Dialog
                    reversed={false}
                    text="Inspector: I don't see much of him."
                    image={Inspector2}
                />
                <Dialog
                    reversed={true}
                    text="Birling: Perhaps I ought to warn you that he's an old friend of mine, and that I see him
                            fairly frequently. We play golf together sometimes up at the west brumley."
                    image={Arthur1}
                />
                <Dialog
                    reversed={false}
                    text="Inspector: (dryly) I don't play golf."
                    image={Inspector2}
                />
                <Dialog
                    reversed={true}
                    text="Birling: I didn't suppose you did."
                    image={Annoyed}
                />
                <Dialog
                    reversed={true}
                    text="Eric: (bursting out) Well, I think it's a dam' shame."
                    image={Shouting}
                />
                <Dialog
                    reversed={false}
                    text="Inspector: No, I’ve never wanted to play."
                    image={NoJerry}
                />
                <Dialog
                    reversed={true}
                    text="Eric: No, I mean about this girl – Eva Smith. Why shouldn't they try for higher wages?
                            We try for the highest possible prices. And I don't see why she should have been sacked just
                            because she'd a bit more spirit than the others. You said yourself she was a good worker. I'd have
                            let her stay."
                    image={Eric1}
                />
                <Dialog
                    reversed={false}
                    text="Birling: (rather angrily) Unless you brighten your ideas, you'll never be in a position to
                            let anybody stay or to tell anybody to go. It's about time you learnt to face a few responsibilities.
                            That's something this public-school-and-varsity life you've had doesn't seem to teach you."
                    image={Angry0}
                />
                <Dialog
                    reversed={true}
                    text="Eric: (sulkily) Well, we don't need to tell the inspector all about that, do we?"
                    image={Stare2}
                />
                <Dialog
                    reversed={false}
                    text="Birling: I don't see we need to tell the inspector anything more. In fact, there's nothing I
                            can tell him. I told the girl to clear out, and she went. That's the last I heard of her. Have you any
                            idea what happened to her after that? Get into trouble? Go on the streets?"
                    image={Blink}
                />
                {/* ================================================ */}
                {/* ================================================ */}
                {/* ================================================ */}
                {/* ending dialog */}
                <Dialog
                    reversed={true}
                    text="Inspector: (rather slowly) No, she didn't exactly go on the streets."
                    image={Inspector2}
                />
                <h1
                    id="ending-heading"
                    style={{ color: "white", textAlign: "center" }}
                >
                    That's the end, thank you for watching!
                </h1>
            </div>
        </div>
    );
}

export default App;
