import * as path from 'path';
import * as os from 'os';

const outputDir = 'artifacts';
const binExtension = ':C.zbin';
const asmExtension = ':C.zasm';
const llvmExtension = ':C.bc';
const libraryDefault = 'MiniMath.sol:MiniMath=0xF9702469Dfb84A9aC171E284F71615bd3D3f1EdC';
const contractSolFilename = 'contract.sol';
const contractYulFilename = 'contract.yul';
const contractZkasmFilename = 'contract.zkasm';
const contractLlvmFilename = 'contract.ll';
const contractJSONFilename = 'contract.json';
const pathToOutputDir = path.join( __dirname, '..', outputDir);
const pathToContracts = path.join( __dirname, '..', 'src', 'contracts');
const pathToCustomOutputDir = path.join(pathToOutputDir, `tmp`);
const pathToReadOnlyOutputDir = path.join(pathToOutputDir, `read-only`);
const pathToBadOutputDir = path.join( __dirname, '..', `File!and#$%`);
const pathToBasicYulContract = path.join(pathToContracts, 'yul', contractYulFilename);
const pathToBasicZkasmContract = path.join(pathToContracts, 'zkasm', contractZkasmFilename);
const pathToBasicSolContract = path.join(pathToContracts, 'solidity', contractSolFilename);
const pathToBasicLlvmContract = path.join(pathToContracts, "llvm", contractLlvmFilename);
const pathToBasicJSONContract = path.join(pathToContracts, "json", contractJSONFilename);
const pathToSolBinOutputFile = path.join(pathToOutputDir, contractSolFilename + binExtension);
const pathToSolAsmOutputFile = path.join(pathToOutputDir, contractSolFilename + asmExtension);
const pathToLlvmContractsFile = path.join(pathToOutputDir, contractLlvmFilename + llvmExtension);
let solcName = 'solc';
if ( os.platform() === 'win32' ) {
  solcName = 'solc.exe'
}
const pathToCustomSolc = path.join( __dirname, '..', '..', solcName);

export const paths = {
  outputDir: outputDir,
  pathToCustomOutputDir: pathToCustomOutputDir,
  pathToReadOnlyOutputDir: pathToReadOnlyOutputDir,
  pathToBadOutputDir: pathToBadOutputDir,
  binExtension: binExtension,
  asmExtension: asmExtension,
  libraryDefault: libraryDefault,
  contractSolFilename: contractSolFilename,
  contractZkasmFilename: contractZkasmFilename,
  contractYulFilename: contractYulFilename,
  pathToOutputDir: pathToOutputDir,
  pathToContracts: pathToContracts,
  pathToBasicZkasmContract: pathToBasicZkasmContract,
  pathToBasicSolContract: pathToBasicSolContract,
  pathToBasicYulContract: pathToBasicYulContract,
  pathToBasicLlvmContract: pathToBasicLlvmContract,
  pathToBasicJSONContract: pathToBasicJSONContract,
  pathToSolBinOutputFile: pathToSolBinOutputFile,
  pathToSolAsmOutputFile: pathToSolAsmOutputFile,
  pathToLlvmOutputFile: pathToLlvmContractsFile,
  pathToCustomSolc: pathToCustomSolc
};
