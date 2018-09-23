--create database dbCOG
use dbCOG
create table tblLanguages(
	nKey	int identity
,	szName	nvarchar(20)
)
create table tblTranslations(
	szKey			nvarchar(200)
,	nLanguageLink	int 
,	szTranslation		nvarchar(2000)
)
create table tblCreatures(
	nKey			int identity
,	nHP				int
,	nAT				int
,	nDF				int
,	nEffectslots	int
,	nTyp			int
,	szName			nvarchar(200)	
,	szDesc			nvarchar(200)	
,	szFlavour		nvarchar(200)	
--,	blPic			blob
,	szPicType		nvarchar(200)
,	nManaCost		int
,	nStamina		int
,	szPicPath		nvarchar(200)
)
create table tblEffects(
	nKey			int identity
,	szName			nvarchar(200)	
,	szDesc			nvarchar(200)	
,	szFlavour		nvarchar(200)	
,	szFunction		nvarchar(max)
,	nType			int
--, blPic			blob
,	szPicType		nvarchar(200)
,	nManaCost		int
,	nStaminaCost	int
,	szPicPath		nvarchar(200)
,	szCondition		nvarchar(max)
)


create table tblHeros(
	nKey	int identity
,	szName	nvarchar(200)
,	nMana	int
,	nHP		int
,	nDef	int
,	nType	int
,	nDesc	int
--,	blPic	blob
,	szPicType	nvarchar(200)

)

create table tblProfiles(
	nKey			int identity 
,	szName			nvarchar(200)
,	nPassword		int
--,	blPic			Blob
,	szPicType		nvarchar(10)
,	szEmail			nvarchar(200)
,	nExperience		bigint
,	PicPath			nvarchar(200)
,	LanguageLink	int				
)

create table tblDeckCards(
	nDeckLink int	
,	nCardLink int	
)

create table tblCards(
	nCardTypeLink	int		
,	nCardLink		int
)
create table tblDecks(
	nKey			int identity
,	nProfileLink	int				
,	szName			nvarchar(200)
)
create table tblCreatureTypes(
	nKey			int identity
,	szName			nvarchar(200) 
,	szDesc			nvarchar(200) 
)
create table tblEffectTypes(
	nKey			int identity
,	szName			nvarchar(200) 
,	szDesc			nvarchar(200) 
)
create table tblCardTypes(
	nKey			int identity
,	szName			nvarchar(200) 
,	szDesc			nvarchar(200) 
)

insert into tblLanguages (szName)
values	(N'de'),
		(N'en')
insert into tblCreatureTypes(szName, szDesc)
values	(N'_magicTypeName', N'_magicTypeDesc'),
		(N'_biotTypeName',N'_biotTypeDesc'),
		(N'_machineTypeName', N'_machineTypeDesc'),
		(N'_babarianTypeName', N'_babarianTypeDesc')
insert into tblTranslations(szKey, szTranslation, nLanguageLink)
values	(N'_magicTypeName', N'Magie', 1),
		(N'_magicTypeName', N'Magic', 2),
		(N'_biotTypeName', N'Biot', 1),
		(N'_biotTypeName', N'Biot', 2),
		(N'_machineTypeName', N'Maschine', 1),
		(N'_machineTypeName', N'Machine', 2),
		(N'_babarianTypeName', N'Babar', 1),
		(N'_babarianTypeName', N'Babarian', 2)
select * from tblTranslations