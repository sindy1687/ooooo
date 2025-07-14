#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
批量更新HTML檔案中的發音功能
將舊的發音系統替換為新的有感情美式發音系統
"""

import os
import re
from pathlib import Path

def update_speech_functions(file_path):
    """更新單個檔案中的發音功能"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # 1. 移除 pickVoice 函數
        pick_voice_pattern = r'// ===== 語音功能 =====\s*function pickVoice\(\) \{[\s\S]*?\}\s*'
        content = re.sub(pick_voice_pattern, '// ===== 語音功能 =====\n    // 使用新的發音系統，移除舊的語音選擇邏輯\n    ', content)
        
        # 2. 更新 speak 函數
        speak_pattern = r'function speak\(text, rate = 1\.0, callback\) \{[\s\S]*?window\.speechSynthesis\.speak\(utter\);\s*\}'
        new_speak = '''function speak(text, rate = 1.0, callback) {
      if (!window.speechSynthesis) return;
      
      // 使用新的發音系統
      if (callback) {
        SoundSystem.speech.speak(text, { rate: rate, onEnd: callback });
      } else {
        SoundSystem.speech.speak(text, { rate: rate });
      }
    }'''
        content = re.sub(speak_pattern, new_speak, content, flags=re.DOTALL)
        
        # 3. 更新 speakQuestionAndWord 函數
        speak_question_pattern = r'function speakQuestionAndWord\([^)]*\) \{[\s\S]*?setTimeout\(\(\) => speak\([^)]*\), 350\);\s*\);\s*\);\s*\}'
        new_speak_question = '''function speakQuestionAndWord(question) {
      // 使用新的發音系統的連續發音功能
      SoundSystem.speech.speakSentenceWithGap(question.original, question.answer);
    }'''
        content = re.sub(speak_question_pattern, new_speak_question, content, flags=re.DOTALL)
        
        # 4. 移除語音初始化相關代碼
        # 移除 speechSynthesis.onvoiceschanged 相關代碼
        voices_changed_pattern = r'if \(typeof speechSynthesis !== \'undefined\'\) \{[\s\S]*?speechSynthesis\.onvoiceschanged = pickVoice;[\s\S]*?pickVoice\(\);[\s\S]*?\}'
        content = re.sub(voices_changed_pattern, '', content, flags=re.DOTALL)
        
        # 5. 移除 findBestVoice 相關代碼（如果存在）
        find_voice_pattern = r'function findBestVoice\(\) \{[\s\S]*?\}'
        content = re.sub(find_voice_pattern, '', content, flags=re.DOTALL)
        
        # 6. 移除 ttsVoice 相關代碼（如果存在）
        tts_voice_pattern = r'let ttsVoice = null;'
        content = re.sub(tts_voice_pattern, '', content)
        
        # 7. 移除 preferredVoice 相關代碼（如果存在）
        preferred_voice_pattern = r'let preferredVoice = null;'
        content = re.sub(preferred_voice_pattern, '', content)
        
        # 8. 移除 gameState.preferredVoice 相關代碼（如果存在）
        game_state_voice_pattern = r'gameState\.preferredVoice = voices\.find\([^)]*\);'
        content = re.sub(game_state_voice_pattern, '', content)
        
        # 9. 移除 findBestVoice() 調用
        find_voice_call_pattern = r'findBestVoice\(\);'
        content = re.sub(find_voice_call_pattern, '', content)
        
        # 10. 移除 pickVoice() 調用
        pick_voice_call_pattern = r'pickVoice\(\);'
        content = re.sub(pick_voice_call_pattern, '', content)
        
        # 如果內容有變化，寫回檔案
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"✅ 已更新: {file_path}")
            return True
        else:
            print(f"⏭️  無需更新: {file_path}")
            return False
            
    except Exception as e:
        print(f"❌ 更新失敗 {file_path}: {e}")
        return False

def main():
    """主函數"""
    # 需要更新的檔案列表
    files_to_update = [
        'persephone.html',
        'hestia.html',
        'hera.html',
        'hermes.html',
        'hephaestus.html',
        'hades.html',
        'dionysus.html',
        'demeter.html',
        'eros.html',
        'athena.html',
        'artemis.html',
        'apollo.html',
        'ares.html',
        'aphrodite.html',
        'zeus - 複製 (3).html',
        'zeus - 複製 (4).html',
        'zeus - 複製 (5).html'
    ]
    
    updated_count = 0
    total_count = len(files_to_update)
    
    for filename in files_to_update:
        if os.path.exists(filename):
            if update_speech_functions(filename):
                updated_count += 1
        else:
            print(f"⚠️  檔案不存在: {filename}")
    
    print(f"\n📊 更新完成: {updated_count}/{total_count} 個檔案已更新")

if __name__ == "__main__":
    main() 