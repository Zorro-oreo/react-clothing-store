import '../CSS/Care.css';
import heroImage from '../assets/care/fab.jpg';
import fabric1Image from '../assets/care/fab1.jpg';
import fabric2Image from '../assets/care/fab2.jpg';
import fabric3Image from '../assets/care/fab3.jpg';

function Care() {
  return (
    <div id="care">
      <div className="care-hero d-flex align-items-center justify-content-between flex-row">
        <div className="care-hero-text d-flex align-items-start justify-content-start flex-column">
          <h1>Made to be kept.</h1>
          <p>Three fabrics, one factory, and a repair desk that never closes. Here's what everything is made of and how to keep it looking like it did on day one.</p>
        </div>
        <img src={heroImage} alt="Fabric close-up in the factory" className="care-hero-image" />
      </div>

      <div className="care-fabrics">
        <div className="care-fabrics-inner">
          <h2>The fabrics</h2>
          <div className="care-fabrics-grid d-flex align-items-start justify-content-start flex-row">
            <div className="care-fabric-card d-flex align-items-start justify-content-start flex-column">
              <img src={fabric1Image} alt="Organic jersey swatch" className="care-fabric-image" />
              <h3>Organic jersey</h3>
              <p className="care-fabric-meta">240GSM · GOTS CERTIFIED</p>
              <p className="care-fabric-desc">Grown without synthetic pesticides and spun in Guimarães. It softens over about six washes, then stops changing.</p>
            </div>

            <div className="care-fabric-card d-flex align-items-start justify-content-start flex-column">
              <img src={fabric2Image} alt="Rigid cotton twill swatch" className="care-fabric-image" />
              <h3>Rigid cotton twill</h3>
              <p className="care-fabric-meta">13OZ · UNWASHED</p>
              <p className="care-fabric-desc">Woven in northern Portugal on old shuttle looms. Stiff for a fortnight, then it takes the shape of whoever's wearing it.</p>
            </div>

            <div className="care-fabric-card d-flex align-items-start justify-content-start flex-column">
              <img src={fabric3Image} alt="Lambswool blend swatch" className="care-fabric-image" />
              <h3>Lambswool blend</h3>
              <p className="care-fabric-meta">70% WOOL · 30% RECYCLED NYLON</p>
              <p className="care-fabric-desc">Brushed for loft, with recycled nylon through the yarn so the elbows hold up. Knitted in Porto, two streets from the office.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="care-washing d-flex align-items-start justify-content-between flex-row">
        <div className="care-washing-text d-flex align-items-start justify-content-start flex-column">
          <h2>Washing, in four steps</h2>
          <p>Follow these and a tee lasts years. Ignore them and you'll own a crop top.</p>
        </div>
        <div className="care-washing-steps">
          <div className="care-washing-step d-flex align-items-start justify-content-start flex-row">
            <div className="care-washing-number d-flex align-items-center justify-content-center">1</div>
            <div>
              <h3>Cold, inside out</h3>
              <p>30°C on a normal cycle, turned inside out, with things of a similar colour. Hot water is what shrinks cotton, not the machine.</p>
            </div>
          </div>

          <div className="care-washing-step d-flex align-items-start justify-content-start flex-row">
            <div className="care-washing-number d-flex align-items-center justify-content-center">2</div>
            <div>
              <h3>Half the detergent</h3>
              <p>Most people use twice what they need. Residue is what makes jersey feel stiff, so measure it and skip the fabric softener entirely.</p>
            </div>
          </div>

          <div className="care-washing-step d-flex align-items-start justify-content-start flex-row">
            <div className="care-washing-number d-flex align-items-center justify-content-center">3</div>
            <div>
              <h3>Dry flat, out of the sun</h3>
              <p>Lay knitwear flat and pull it gently back into shape while damp. Direct sun fades the dyes faster than any wash will.</p>
            </div>
          </div>

          <div className="care-washing-step d-flex align-items-start justify-content-start flex-row">
            <div className="care-washing-number d-flex align-items-center justify-content-center">4</div>
            <div>
              <h3>Skip the tumble dryer</h3>
              <p>It's the one thing that will beat us. If you must, lowest heat, and take it out while it's still slightly damp.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="care-repairs d-flex align-items-center justify-content-between flex-row">
        <div className="care-repairs-text d-flex align-items-start justify-content-start flex-column">
          <h2>Repairs, free, forever</h2>
          <p>Send anything back with a note about what happened. We fix seams, buttons, zips and most regrets, then post it home. No receipt needed, no questions about how it got like that.</p>
        </div>
        <div className="care-repairs-stats">
          <div className="care-repairs-stat d-flex align-items-center justify-content-start flex-row">
            <span className="care-repairs-value">Free</span>
            <span className="care-repairs-label">on everything we've ever made</span>
          </div>

          <div className="care-repairs-stat d-flex align-items-center justify-content-start flex-row">
            <span className="care-repairs-value">9 days</span>
            <span className="care-repairs-label">average turnaround, door to door</span>
          </div>

          <div className="care-repairs-stat d-flex align-items-center justify-content-start flex-row">
            <span className="care-repairs-value">1,400+</span>
            <span className="care-repairs-label">pieces mended since 2021</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Care;
