import React from "react";
import ClassicMusicType from "../../types/classicMusic";
import OpenAirType from "../../types/openAir";
import PartyType from "../../types/party";

interface additionalInfoProps {
	additionalInfo : ClassicMusicType | OpenAirType | PartyType,
}

const AdditionalInfo = ({additionalInfo} : additionalInfoProps)=> {
  const additionalInfoRender = [];

  function isClassicMusic (additionalInfo : ClassicMusicType | OpenAirType | PartyType) : additionalInfo is ClassicMusicType {
    return (additionalInfo as ClassicMusicType).name !== undefined;
  }

  if (isClassicMusic(additionalInfo)){
    additionalInfoRender.push(<p className="concert-page__p p" key={1}>Композитор - {additionalInfo['composer' as keyof ClassicMusicType]}</p>);
    additionalInfoRender.push(<p className="concert-page__p p" key={2}>Тип голоса - {additionalInfo['voiceType' as keyof ClassicMusicType]}</p>);
  } 

  function isOpenAir (additionalInfo : ClassicMusicType | OpenAirType | PartyType) : additionalInfo is OpenAirType {
    return (additionalInfo as OpenAirType).headliner !== undefined;
  }

  if (isOpenAir(additionalInfo)){
    additionalInfoRender.push(<p className="concert-page__p p" key={1}>Как добраться - {additionalInfo['directions' as keyof OpenAirType]}</p>);
    additionalInfoRender.push(<p className="concert-page__p p" key={2}>Хедлайнер - {additionalInfo['headliner' as keyof OpenAirType]}</p>);
  } 

  function isParty (additionalInfo : ClassicMusicType | OpenAirType | PartyType) : additionalInfo is PartyType {
    return (additionalInfo as PartyType).age_limit !== undefined;
  }

  if (isParty(additionalInfo)){
    additionalInfoRender.push(<p className="concert-page__p p" key={1}>Возрастной лимит - {additionalInfo["age_limit" as keyof PartyType]}</p>);
  } 

	return (
		<>
			{additionalInfoRender}
		</>
	)
};

export default AdditionalInfo;